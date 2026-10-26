import HeadingSection from "../components/HeadingSection"
import { useState } from "react";
import { RotateCcw, Table, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group";
import { hitungPuyuh } from "@/lib/calc/puyuh";
import { fmtN } from "@/lib/format";
import { analysisFields } from "../data/analysis";
import ResultDialog from "../components/ResultDialog";
import { Stagger, StaggerItem } from "../../../components/Stagger";
import FadeIn from "../../../components/FadeIn";

const EMPTY = Object.fromEntries(analysisFields.map((f) => [f.name, ""]));

export default function Analysis() {
    const [values, setValues] = useState(EMPTY); // string digit mentah
    const [hasil, setHasil] = useState(null);
    const [open, setOpen] = useState(false);

    const isComplete = analysisFields.every((f) => Number(values[f.name]) > 0);
    const isDirty = analysisFields.some((f) => values[f.name] !== "");

    const handleChange = (name, raw) =>
        setValues((prev) => ({ ...prev, [name]: raw.replace(/\D/g, "") }));

    const handleHitung = () => {
        const input = Object.fromEntries(
            Object.entries(values).map(([k, v]) => [k, Number(v)])
        );
        setHasil(hitungPuyuh(input));
        setOpen(true);
    };

    const handleReset = () => {
        setValues(EMPTY);
        setHasil(null);
    };

    return (
        <div id="Analysis" className="max-w-5xl py-24 w-full flex flex-col space-y-6 mx-auto">
            <HeadingSection
                title="Hitung Potensi Keuntungan & Efisiensi Kandang Anda"
                description="Perbandingan langsung antara pendekatan pemantauan manual dan sistem kandang pintar berbasis teknologi IoT presisi"
            />

            <div className="max-w-5xl w-full flex items-center justify-between">

                {/* Bagian Kiri */}
                <div className="flex gap-3 flex-1">
                    <Stagger className="grid grid-cols-2 gap-4" delay={0.1}>

                        {/* Komponen 1 */}
                        <StaggerItem>
                            <div className="h-fit flex flex-col gap-1.5 w-full bg-gray-100 ring ring-gray-200 rounded-xl flex-1 p-1.5">
                                <div className="bg-white rounded-lg ring ring-gray-200 p-4">
                                    <p className="text-3xl font-semibold flex items-center justify-center">
                                        <span className="inline-flex items-center">65</span>
                                        <span className="inline-flex items-center">%</span>
                                    </p>
                                </div>
                                <p className="text-xs text-neutral-500 font-semibold text-center">Biaya Pakan</p>
                            </div>
                        </StaggerItem>

                        {/* Komponen 2 */}
                        <StaggerItem>
                            <div className="h-fit flex flex-col gap-1.5 w-full bg-gray-100 ring ring-gray-200 rounded-xl flex-1 p-1.5">
                                <div className="bg-white rounded-lg ring ring-gray-200 p-4">
                                    <p className="text-3xl font-semibold flex items-center justify-center">
                                        <span className="inline-flex items-center">20</span>
                                        <span className="inline-flex items-center">%</span>
                                    </p>
                                </div>
                                <p className="text-xs text-neutral-500 font-semibold text-center">Operasional</p>
                            </div>
                        </StaggerItem>

                        {/* Komponen 3 */}
                        <StaggerItem>
                            <div className="h-fit flex flex-col gap-1.5 w-full bg-gray-100 ring ring-gray-200 rounded-xl flex-1 p-1.5">
                                <div className="bg-white rounded-lg ring ring-gray-200 p-4">
                                    <p className="text-3xl font-semibold flex items-center justify-center">
                                        <span className="inline-flex items-center">10</span>
                                        <span className="inline-flex items-center">%</span>
                                    </p>
                                </div>
                                <p className="text-xs text-neutral-500 font-semibold text-center">Obat & Vaksin</p>
                            </div>
                        </StaggerItem>

                        {/* Komponen 4 */}
                        <StaggerItem>
                            <div className="h-fit flex flex-col gap-1.5 w-full bg-gray-100 ring ring-gray-200 rounded-xl flex-1 p-1.5">
                                <div className="bg-white rounded-lg ring ring-gray-200 p-4">
                                    <p className="text-3xl font-semibold flex items-center justify-center">
                                        <span className="inline-flex items-center">5</span>
                                        <span className="inline-flex items-center">%</span>
                                    </p>
                                </div>
                                <p className="text-xs text-neutral-500 font-semibold text-center">Lain-lain</p>
                            </div>
                        </StaggerItem>


                        <div className="col-span-2 ">
                            <StaggerItem>
                                <div className="flex items-center justify-center gap-1.5">
                                    <svg className="size-3 text-neutral-400" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-[10px] text-neutral-400 text-center">Komponen Biaya Produksi Ternak (Rata-rata)</p>
                                </div>
                            </StaggerItem>
                        </div>

                    </Stagger>
                </div>

                {/* Bagian kanan */}
                <Stagger className="flex flex-col space-y-2 flex-2 w-full" delay={0.2}>
                    <StaggerItem>
                        <p className="text-xs text-neutral-400 text-justify">Banyak peternak puyuh yang sudah berproduksi bertahun-tahun namun belum mengetahui apakah usahanya benar-benar menguntungkan. Kunci utamanya adalah memahami Harga Pokok Produksi (HPP) — yaitu total biaya yang dikeluarkan untuk menghasilkan satu butir telur atau satu ekor daging. Jika HPP lebih tinggi dari harga jual, artinya Anda menjual rugi tanpa menyadarinya.</p>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xs text-neutral-400 text-justify">Dalam peternakan puyuh, biaya produksi terbagi menjadi tiga komponen utama, biaya pakan (terbesar, biasanya 60-70% dari total biaya), biaya operasional (listrik, air, tenaga kerja), dan biaya lain-lain (obat-obatan, vaksin, kemasan, transportasi). Mengetahui proporsi masing-masing komponen membantu Anda menentukan di mana efisiensi paling bisa ditingkatkan.</p>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xs text-neutral-400 text-justify">Selain HPP, peternak perlu menghitung Break Even Point (BEP) — jumlah produksi minimal agar usaha tidak rugi. Jika produksi aktual di bawah BEP, maka bisnis merugi. BEP dipengaruhi oleh tiga variabel utama: jumlah populasi puyuh betina, persentase produktivitas (hen-day), dan efisiensi biaya. Peningkatan produktivitas hanya 5% saja bisa menggeser BEP secara signifikan dan mendongkrak keuntungan bersih per bulan.</p>
                    </StaggerItem>
                </Stagger>

            </div>

            <FadeIn delay={0.8}>
                <div className="flex items-start gap-2 bg-gray-100 px-3 py-2 rounded-lg ring ring-gray-200 mt-2">
                    <svg className="size-3.5 text-acc" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[10px]">
                        <span className="font-semibold mr-2">
                            Konstanta Sistem (hardcoded):
                        </span>
                        <span className="text-neutral-400">
                            DOQ awal = 2.000 ekor · Intake pakan = 27 g/ekor/hari · 1 karung = 50 kg · Total periode = 60 minggu · Mortalitas 540 ekor (pop. akhir 1.460) · Kurva HDP standar puyuh layer
                        </span>
                    </p>
                </div>
            </FadeIn>

            <div className="mx-auto w-full">
                <FadeIn delay={1}>
                    <div className="rounded-2xl bg-gray-100 ring ring-gray-200 p-1.5">
                        <div className="flex items-center gap-2 px-3 pb-2 pt-1">
                            <svg className="size-3.5 text-acc" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8H8.01M4.56274 2.93726L2.93726 4.56274C2.59136 4.90864 2.4184 5.0816 2.29472 5.28343C2.18506 5.46237 2.10425 5.65746 2.05526 5.86154C2 6.09171 2 6.3363 2 6.82548L2 9.67452C2 10.1637 2 10.4083 2.05526 10.6385C2.10425 10.8425 2.18506 11.0376 2.29472 11.2166C2.4184 11.4184 2.59135 11.5914 2.93726 11.9373L10.6059 19.6059C11.7939 20.7939 12.388 21.388 13.0729 21.6105C13.6755 21.8063 14.3245 21.8063 14.927 21.6105C15.612 21.388 16.2061 20.7939 17.3941 19.6059L19.6059 17.3941C20.7939 16.2061 21.388 15.612 21.6105 14.927C21.8063 14.3245 21.8063 13.6755 21.6105 13.0729C21.388 12.388 20.7939 11.7939 19.6059 10.6059L11.9373 2.93726C11.5914 2.59136 11.4184 2.4184 11.2166 2.29472C11.0376 2.18506 10.8425 2.10425 10.6385 2.05526C10.4083 2 10.1637 2 9.67452 2L6.82548 2C6.3363 2 6.09171 2 5.86154 2.05526C5.65746 2.10425 5.46237 2.18506 5.28343 2.29472C5.0816 2.4184 4.90865 2.59135 4.56274 2.93726ZM8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="text-xs font-semibold">Harga Input Pasar <span className="text-xs font-normal text-neutral-400">(6 Variabel)</span></h3>
                        </div>

                        <form
                            className="rounded-xl bg-white p-6 ring ring-gray-200"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleHitung();
                            }}
                        >
                            <FieldGroup className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                                {analysisFields.map(({ name, label }) => (
                                    <Field key={name}>
                                        <FieldLabel htmlFor={name} className="text-[10px] text-neutral-400">
                                            {label}
                                        </FieldLabel>
                                        <InputGroup className="bg-gray-100">
                                            <InputGroupAddon>
                                                <InputGroupText className="font-semibold text-[11px]">Rp</InputGroupText>
                                            </InputGroupAddon>
                                            <InputGroupInput
                                                id={name}
                                                inputMode="numeric"
                                                autoComplete="off"
                                                className="text-xs!"
                                                value={values[name] ? fmtN(Number(values[name])) : ""}
                                                onChange={(e) => handleChange(name, e.target.value)}
                                            />
                                        </InputGroup>
                                    </Field>
                                ))}
                            </FieldGroup>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={handleReset}
                                    disabled={!isDirty}
                                    className="gap-2 rounded-lg px-4 text-xs"
                                >
                                    <RotateCcw className="size-3.5" /> Reset Ulang
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={!isComplete}
                                    className="gap-2 rounded-lg px-4 text-white text-xs bg-linear-to-b from-grad2 to-grad1"
                                >
                                    <Table className="size-3.5" /> Hitung Analisa
                                </Button>
                            </div>
                        </form>
                    </div>
                </FadeIn>
            </div>

            {hasil && <ResultDialog hasil={hasil} open={open} onOpenChange={setOpen} />}
        </div>
    )
}