export const WA_NUMBER = "6285700340869";

export function buildWaLink(d) {
    const lines = [
        "Halo TemanTernak, saya ingin konsultasi IoT & ERP.",
        "",
        `Nama: ${d.nama}`,
        `WhatsApp: ${d.whatsapp}`,
        d.jenisKandang ? `Jenis kandang: ${d.jenisKandang}` : null,
        d.jumlahPuyuh ? `Jumlah puyuh: ${d.jumlahPuyuh} ekor` : null,
        d.kebutuhan ? `Kebutuhan: ${d.kebutuhan}` : null,
    ].filter((l) => l !== null);

    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}