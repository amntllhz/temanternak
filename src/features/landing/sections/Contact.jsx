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
import FadeIn from "../../../components/FadeIn";
import BlurText from "../../../components/BlurText"

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
        <section className="py-10 max-w-5xl w-full z-10">
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
                    <div className="flex flex-col space-y-1.5">
                        <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">Siap Modernisasi dan Tingkatkan Produktivitas Kandang?</h3>
                        <BlurText
                            text="Siap Modernisasi dan Tingkatkan Produktivitas Kandang?"
                            effect="blur"
                            animateBy="words"
                            direction="bottom"
                            staggerFrom="start"
                            trigger="view"
                            delay={50}
                            stepDuration={0.30}
                            blur={10}
                            distance={20}
                            className="text-lg font-semibold text-white tracking-tight leading-snug"
                            loop={false}
                            loopDelay={2}
                            focusOnHover={false}
                        />
                        <p className="text-xs text-neutral-200">Membantu merancang instalasi IoT dan konfigurasi sistem ERP yang tepat sesuai skala populasi peternakan</p>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center gap-2">
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-xs leading-none text-[10px] text-white">Analisis Kebutuhan Kustom</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-xs leading-none text-[10px] text-white">Demo Sistem ERP Gratis</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-xs leading-none text-[10px] text-white">Pendampingan Ahli</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-3 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-xs leading-none text-[10px] text-white">Estimasi Anggaran Transparan</p>
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