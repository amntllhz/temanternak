/* Kalkulator puyuh petelur. Periode bertelur mgg 9-60 (52 minggu). Fungsi murni, tanpa React. */

export const DOQ_AWAL = 2000;
export const POP_MGG_9 = 1952;
export const INTAKE_G = 27; // gram/ekor/hari
export const ZAK_GRAM = 50000; // 1 karung = 50 kg
export const MINGGU_AWAL = 9;
export const MINGGU_AKHIR = 60;
export const HDP_MARGIN = 0.5; // pengurang aman dari kurva HDP standar

const HDP_RAMP_UP = [73.1, 85.36, 90.62, 92.46, 93.38, 93.61, 93.42, 92.94, 92.92, 92.56, 92.43]; // mgg 9-19
const MINGGU_POP_TETAP = new Set([12, 16, 20, 24, 28, 32, 36, 40, 44, 48]);

export function getHDP(mgg) {
    const base = mgg <= 19 ? HDP_RAMP_UP[mgg - MINGGU_AWAL] : 92.24 - (mgg - 20) * 0.19;
    return +(base - HDP_MARGIN).toFixed(2);
}

/** Populasi mgg 9..60. Turun 12/minggu kecuali minggu di MINGGU_POP_TETAP. */
export function buildPopulasi() {
    const pop = [];
    let cur = POP_MGG_9;
    for (let w = MINGGU_AWAL; w <= MINGGU_AKHIR; w++) {
        if (w > MINGGU_AWAL && !MINGGU_POP_TETAP.has(w)) cur -= 12;
        pop.push(cur);
    }
    return pop;
}

const row = (item, qty, satuan, harga) => ({ item, qty, satuan, harga, total: qty * harga });

export function buildFaseRows({ hargaDOQ, hargaStarterGiling, hargaStarter, hargaLayer }) {
    return {
        fase1: [
            row("DOQ Puyuh", DOQ_AWAL, "ekor", hargaDOQ),
            row("Pakan Starter (BR) Giling", 3, "zak", hargaStarterGiling),
            row("Vitamin Pertumbuhan (Chick)", 6, "bungkus", 18500),
            row("Vitamin Anti Stress (Bio)", 3, "bungkus", 14500),
        ],
        fase2: [
            row("Pakan Starter s/d umur 35 hari", 16, "zak", hargaStarter),
            row("Vaksin ND", 2, "botol", 17000),
            row("Vaksin AI", DOQ_AWAL, "ekor", 260),
        ],
        fase3: [
            row("Pakan Layer umur 35 s/d 42 hari", 8, "zak", hargaLayer),
            row("Vit C / anti stress", 2, "bungkus", 19000),
        ],
        fase4: [
            row("Pakan Layer umur 43 s/d BEP", 14, "zak", hargaLayer),
            row("Vit C / anti stress", 6, "bungkus", 19000),
        ],
        tambahan: [
            row("Vaksin ND", 12, "botol", 17000),
            row("PG Anti Stress", 80, "bungkus", 9000),
            row("Vitamin Bio / Vit C", 80, "bungkus", 14500),
            row("Antibiotik", 16, "bungkus", 28000),
        ],
    };
}

const sumFase = (faseRows) =>
    Object.values(faseRows).flat().reduce((s, r) => s + r.total, 0);

export function hitungPuyuh(input) {
    const { hargaLayer, hargaTelur, hargaAfkir } = input;
    const popArr = buildPopulasi();

    let kumulatif = 0;
    const mingguData = popArr.map((pop, i) => {
        const mgg = MINGGU_AWAL + i;
        const hdp = getHDP(mgg);
        const zakMgg = (pop * INTAKE_G * 7) / ZAK_GRAM;
        const biayaPakan = zakMgg * hargaLayer;
        const prodHari = pop * (hdp / 100);
        const pendTelur = prodHari * 7 * hargaTelur;
        const labaMgg = pendTelur - biayaPakan;
        kumulatif += labaMgg;
        return { mgg, pop, hdp, zakMgg, biayaPakan, prodHari, pendTelur, labaMgg, kumulatif };
    });

    const popAkhir = popArr[popArr.length - 1];
    const labaOperasional = kumulatif; // Σ(pendapatan telur − biaya pakan layer)
    const pendapatanAfkir = popAkhir * hargaAfkir;
    const labaKotor = labaOperasional + pendapatanAfkir;
    const faseRows = buildFaseRows(input);
    const totalBiaya = sumFase(faseRows);
    const labaBersih = labaKotor - totalBiaya;

    return { mingguData, faseRows, popAkhir, labaOperasional, pendapatanAfkir, labaKotor, totalBiaya, labaBersih };
}