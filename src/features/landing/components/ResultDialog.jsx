import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { fmtDec, fmtN, fmtRp } from "@/lib/format";
import { faseLabels } from "../data/analysis";

function Ringkasan({ hasil }) {
    const rugi = hasil.labaBersih < 0;
    const items = [
        ["Laba Operasional Telur (mgg 9–60)", hasil.labaOperasional, ""],
        [`Penjualan Afkir (${fmtN(hasil.popAkhir)} ekor)`, hasil.pendapatanAfkir, ""],
        ["Total Pendapatan", hasil.labaKotor, ""],
        ["Total Biaya Modal", hasil.totalBiaya, "text-red-500"],
    ];

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {items.map(([label, value, color]) => (
                    <div key={label} className="rounded-2xl bg-gray-100 ring ring-gray-200 p-4">
                        <p className="text-xs text-neutral-400">{label}</p>
                        <p className={cn("mt-1 text-lg font-bold", color)}>{fmtRp(value)}</p>
                    </div>
                ))}
            </div>

            <div
                className={cn(
                    "rounded-2xl p-6 text-center",
                    rugi ? "bg-red-50 text-red-600" : "bg-grad2/5 text-grad2 ring ring-grad2/20"
                )}
            >
                <p className="text-xs">Laba Bersih — 60 Minggu (420 Hari)</p>
                <p className="my-2 text-3xl font-bold">{fmtRp(hasil.labaBersih)}</p>
                <p className="text-[10px] opacity-80">
                    {fmtRp(hasil.labaKotor)} − {fmtRp(hasil.totalBiaya)} = {fmtRp(hasil.labaBersih)}
                </p>
            </div>
        </div>
    );
}

function RincianBiaya({ hasil }) {
    return (
        <div className="space-y-6">
            {faseLabels.map(({ key, label }) => {
                const rows = hasil.faseRows[key];
                const subtotal = rows.reduce((s, r) => s + r.total, 0);
                return (
                    <div key={key}>
                        <div className="mb-2 flex items-center justify-between text-xs bg-gray-100 ring ring-gray-200 px-3 py-1 rounded-md font-semibold">
                            <span>{label}</span>
                            <span>{fmtRp(subtotal)}</span>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-semibold text-xs text-left">Item</TableHead>
                                    <TableHead className="font-semibold text-xs text-center">Qty</TableHead>
                                    <TableHead className="font-semibold text-xs text-center">Satuan</TableHead>
                                    <TableHead className="font-semibold text-xs text-right">Harga</TableHead>
                                    <TableHead className="font-semibold text-xs text-right">Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {rows.map((r, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="text-xs text-neutral-400 text-left">{r.item}</TableCell>
                                        <TableCell className="text-xs text-neutral-400 text-center">{fmtN(r.qty)}</TableCell>
                                        <TableCell className="text-xs text-neutral-400 text-center">{r.satuan}</TableCell>
                                        <TableCell className="text-xs text-neutral-400 text-right">{fmtRp(r.harga)}</TableCell>
                                        <TableCell className="text-xs text-neutral-400 text-right font-medium">{fmtRp(r.total)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                );
            })}

            <div className="flex items-center justify-between rounded-2xl bg-muted p-4 font-semibold">
                <span>Total Seluruh Biaya</span>
                <span>{fmtRp(hasil.totalBiaya)}</span>
            </div>
        </div>
    );
}

function Mingguan({ hasil }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-xs font-semibold text-center">Mgg</TableHead>
                    <TableHead className="text-xs font-semibold text-center">Populasi</TableHead>
                    <TableHead className="text-xs font-semibold text-center">HDP</TableHead>
                    <TableHead className="text-xs font-semibold text-center">Pakan (zak)</TableHead>
                    <TableHead className="text-xs font-semibold text-center">Biaya Pakan</TableHead>
                    <TableHead className="text-xs font-semibold text-center">Telur/hari</TableHead>
                    <TableHead className="text-xs font-semibold text-center">Pendapatan Telur</TableHead>
                    <TableHead className="text-xs font-semibold text-center">Laba/Mgg</TableHead>
                    <TableHead className="text-xs font-semibold text-center">Kumulatif</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {hasil.mingguData.map((r) => (
                    <TableRow key={r.mgg}>
                        <TableCell className="text-neutral-400 text-xs text-center font-semibold">{r.mgg}</TableCell>
                        <TableCell className="text-neutral-400 text-xs text-center">{fmtN(r.pop)}</TableCell>
                        <TableCell className="text-neutral-400 text-xs text-center">{fmtDec(r.hdp)}%</TableCell>
                        <TableCell className="text-neutral-400 text-xs text-center">{fmtDec(r.zakMgg)}</TableCell>
                        <TableCell className="text-neutral-400 text-xs text-center">{fmtRp(r.biayaPakan)}</TableCell>
                        <TableCell className="text-neutral-400 text-xs text-center">{fmtN(r.prodHari)}</TableCell>
                        <TableCell className="text-neutral-400 text-xs text-center">{fmtRp(r.pendTelur)}</TableCell>
                        <TableCell
                            className={cn(
                                "text-center text-xs font-semibold",
                                r.labaMgg >= 0 ? "text-grad2" : "text-red-500"
                            )}
                        >
                            {fmtRp(r.labaMgg)}
                        </TableCell>
                        <TableCell className=" text-xs text-center font-semibold">{fmtRp(r.kumulatif)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow className="text-xs bg-gray-100 ring ring-gray-200 px-3 py-1 rounded-md font-semibold">
                    <TableCell colSpan={8} className="font-semibold text-xs">
                        Total laba operasional telur
                    </TableCell>
                    <TableCell colSpan={1} className="text-center text-xs font-semibold">
                        {fmtRp(hasil.labaOperasional)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default function ResultDialog({ hasil, open, onOpenChange }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="flex max-h-[90vh] flex-col sm:max-w-4xl">
                <DialogHeader>
                    <div className="flex items-start gap-2">
                        <svg className="size-3.5 text-acc" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 20V13M12 20V10M4 20L4 16M13.4067 5.0275L18.5751 6.96567M10.7988 5.40092L5.20023 9.59983M21.0607 6.43934C21.6464 7.02513 21.6464 7.97487 21.0607 8.56066C20.4749 9.14645 19.5251 9.14645 18.9393 8.56066C18.3536 7.97487 18.3536 7.02513 18.9393 6.43934C19.5251 5.85355 20.4749 5.85355 21.0607 6.43934ZM5.06066 9.43934C5.64645 10.0251 5.64645 10.9749 5.06066 11.5607C4.47487 12.1464 3.52513 12.1464 2.93934 11.5607C2.35355 10.9749 2.35355 10.0251 2.93934 9.43934C3.52513 8.85355 4.47487 8.85355 5.06066 9.43934ZM13.0607 3.43934C13.6464 4.02513 13.6464 4.97487 13.0607 5.56066C12.4749 6.14645 11.5251 6.14645 10.9393 5.56066C10.3536 4.97487 10.3536 4.02513 10.9393 3.43934C11.5251 2.85355 12.4749 2.85355 13.0607 3.43934Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex flex-col space-y-1.5">
                            <DialogTitle className="text-sm font-semibold leading-none">Hasil Analisa Usaha</DialogTitle>
                            <DialogDescription className="text-xs">
                                Estimasi satu periode (60 minggu) berdasarkan harga yang kamu masukkan.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <Tabs defaultValue="ringkasan" className="flex min-h-0 flex-1 flex-col">
                    <TabsList>
                        <TabsTrigger className="text-xs data-active:font-semibold px-3 py-1 rounded-md" value="ringkasan">Ringkasan</TabsTrigger>
                        <TabsTrigger className="text-xs data-active:font-semibold px-3 py-1 rounded-md" value="biaya">Rincian Biaya</TabsTrigger>
                        <TabsTrigger className="text-xs data-active:font-semibold px-3 py-1 rounded-md" value="mingguan">Mingguan</TabsTrigger>
                    </TabsList>

                    <TabsContent value="ringkasan" className="min-h-0 overflow-y-auto pt-2 px-1 py-1">
                        <Ringkasan hasil={hasil} />
                    </TabsContent>
                    <TabsContent value="biaya" className="min-h-0 overflow-y-auto pt-2 px-1 py-1">
                        <RincianBiaya hasil={hasil} />
                    </TabsContent>
                    <TabsContent value="mingguan" className="min-h-0 overflow-y-auto pt-2 px-1 py-1">
                        <Mingguan hasil={hasil} />
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}