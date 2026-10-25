import { describe, it, expect } from "vitest";
import { hitungPuyuh, buildPopulasi, getHDP } from "./puyuh";

const DEFAULT = {
    hargaDOQ: 3000,
    hargaStarterGiling: 500000,
    hargaStarter: 500000,
    hargaLayer: 400000,
    hargaTelur: 350,
    hargaAfkir: 6500,
};

describe("kalkulator puyuh", () => {
    it("populasi: 52 minggu, 1952 -> 1460", () => {
        const pop = buildPopulasi();
        expect(pop).toHaveLength(52);
        expect([pop[0], pop[51]]).toEqual([1952, 1460]);
    });

    it("HDP sudah dikurangi margin 0.5", () => {
        expect(getHDP(9)).toBe(72.6);
        expect(getHDP(60)).toBe(84.14);
    });

    it("hasil dengan harga default sama dengan project lama", () => {
        const r = hitungPuyuh(DEFAULT);
        expect(r.totalBiaya).toBe(27692500);
        expect(r.pendapatanAfkir).toBe(9490000);
        expect(Math.round(r.labaOperasional)).toBe(58542273);
        expect(Math.round(r.labaBersih)).toBe(40339773);
    });
}); s