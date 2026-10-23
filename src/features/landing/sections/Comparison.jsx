import HeadingSection from "../components/HeadingSection";
import { comparisonRows } from "../data/comparison";
import { Sparkles, SquareX } from "lucide-react";

const Comparison = () => {
    return (
        <div id="Comparison" className="max-w-5xl py-24 w-full flex flex-col space-y-8 mx-auto">
            <HeadingSection
                title="Transformasi : Metode Konvensional vs IoT TemanTernak"
                description="Perbandingan langsung antara pendekatan pemantauan manual dan sistem kandang pintar berbasis teknologi IoT presisi"
            />
            <div className="min-w-180 rounded-3xl bg-gray-200 p-2">
                {/* header */}
                <div className="grid grid-cols-3 items-center pb-2 pt-1 text-center font-semibold">
                    <p className="text-xs">Parameter Evaluasi</p>
                    <div className="flex items-center justify-center gap-2 text-red-500">
                        <SquareX className="size-3" />
                        <p className="text-xs">Metode Konvensional</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-grad2">
                        <Sparkles className="size-3" />
                        <p className="text-xs">IoT dan Sistem ERP TemanTernak</p>
                    </div>
                </div>

                {/* body */}
                <div className="divide-y-2 divide-muted rounded-2xl bg-white p-1">
                    {comparisonRows.map((row) => (
                        <div key={row.parameter} className="grid grid-cols-3 items-center py-3 text-center text-sm">
                            <div className="font-medium text-[11px]">{row.parameter}</div>
                            <div className="text-neutral-400 text-[11px]">{row.conventional}</div>
                            <div className="text-green-600 text-[11px]">{row.erp}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comparison