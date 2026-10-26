import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { buildWaLink } from "@/lib/contact";
import { jenisKandangOptions } from "../data/contact";

const EMPTY = { nama: "", whatsapp: "", jenisKandang: "", jumlahPuyuh: "", kebutuhan: "" };
const labelCls = "text-[10px] text-neutral-400";

const Contact = () => {
    const [form, setForm] = useState(EMPTY);
    const set = (name, value) => setForm((f) => ({ ...f, [name]: value }));
    const canSubmit = form.nama.trim() !== "" && form.whatsapp.trim() !== "";

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(buildWaLink(form), "_blank", "noopener,noreferrer");
        setForm(EMPTY);
    };

    return (
        <section className="py-10 max-w-5xl w-full">
            <div className="flex p-2 bg-white rounded-2xl ring ring-gray-200 mx-auto">

                {/* Bagian Kiri */}
                <div className="relative flex flex-col gap-6 flex-1 p-10 bg-linear-to-b from-grad2 from-60% to-100% to-grad1 rounded-xl overflow-hidden">
                    <svg class="absolute z-0 opacity-30 w-full left-0 h-full -top-0.5" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="a" width="25" height="25" patternUnits="userSpaceOnUse">
                                <rect width="100%" height="100%" fill="none" />
                                <path fill="none" stroke="#00A84F" stroke-linecap="round" stroke-linejoin="round"
                                    d="M5.75 10h13.5M12.5 3.25v13.5" />
                            </pattern>
                        </defs>
                        <rect width="800%" height="800%" fill="url(#a)" />
                    </svg>
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">Siap Modernisasi dan Tingkatkan Produktivitas Kandang?</h3>
                        <p className="text-xs text-neutral-200">Membantu merancang instalasi IoT dan konfigurasi sistem ERP yang tepat sesuai skala populasi peternakan</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-2">
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-xs text-[10px] text-white">Siwatu 16/05 Wonotunggal, Kab. Batang, Jawa Tengah</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-xs text-[10px] text-white">+62 857-0034-0869</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-xs text-[10px] text-white">support@temanternak.com</p>
                        </div>
                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="flex flex-col gap-6 flex-2">
                    <form onSubmit={handleSubmit} className="flex flex-2 flex-col gap-6 md:p-10">
                        <FieldGroup className="gap-4">
                            <Field>
                                <FieldLabel htmlFor="nama" className={labelCls}>Nama Lengkap</FieldLabel>
                                <Input
                                    id="nama"
                                    autoComplete="name"
                                    value={form.nama}
                                    className="text-xs!"
                                    onChange={(e) => set("nama", e.target.value)}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="whatsapp" className={labelCls}>Nomor WhatsApp Aktif</FieldLabel>
                                <Input
                                    id="whatsapp"
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    value={form.whatsapp}
                                    className="text-xs!"
                                    onChange={(e) => set("whatsapp", e.target.value.replace(/[^\d+]/g, ""))}
                                />
                            </Field>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <Field>
                                    <FieldLabel htmlFor="jenisKandang" className={labelCls}>Jenis Kandang</FieldLabel>
                                    <Select value={form.jenisKandang} onValueChange={(v) => set("jenisKandang", v)}>
                                        <SelectTrigger id="jenisKandang" className="w-full text-xs!">
                                            <SelectValue placeholder="Pilih jenis kandang" />
                                        </SelectTrigger>
                                        <SelectContent className="p-1">
                                            {jenisKandangOptions.map((o) => (
                                                <SelectItem className="text-xs!" key={o} value={o}>{o}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="jumlahPuyuh" className={labelCls}>Jumlah Puyuh Saat Ini</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            id="jumlahPuyuh"
                                            inputMode="numeric"
                                            value={form.jumlahPuyuh}
                                            className="text-xs!"
                                            onChange={(e) => set("jumlahPuyuh", e.target.value.replace(/\D/g, ""))}
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText className="text-[10px]">ekor</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Field>
                            </div>

                            <Field>
                                <FieldLabel htmlFor="kebutuhan" className={labelCls}>Kebutuhan Utama</FieldLabel>
                                <Textarea
                                    id="kebutuhan"
                                    rows={4}
                                    placeholder="Misal: otomatisasi pakan, monitoring jarak jauh, laporan keuangan digital"
                                    value={form.kebutuhan}
                                    className="text-xs! placeholder:text-xs placeholder:text-neutral-300"
                                    onChange={(e) => set("kebutuhan", e.target.value)}
                                />
                            </Field>
                        </FieldGroup>

                        <Button
                            type="submit"
                            disabled={!canSubmit}
                            className="flex gap-2 w-full self-start rounded-lg bg-linear-to-b from-grad2 to-grad1 text-xs text-white"
                        >
                            Kirim Konsultasi
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact