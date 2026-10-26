import HeadingSection from "../components/HeadingSection";
import { comparisonRows } from "../data/comparison";

const Comparison = () => {
    return (
        <div id="Comparison" className="max-w-5xl py-24 w-full flex flex-col space-y-8 mx-auto">
            <HeadingSection
                title="Transformasi : Metode Konvensional vs IoT TemanTernak"
                description="Perbandingan langsung antara pendekatan pemantauan manual dan sistem kandang pintar berbasis teknologi IoT presisi"
            />

            {/* Tabel Perbandingan */}
            <div className="min-w-180 rounded-2xl bg-gray-100 ring ring-gray-200 p-1.5">
                {/* Header Tabel */}
                <div className="grid grid-cols-3 items-center pb-2 pt-1 text-center font-semibold">
                    <p className="text-xs">Parameter Evaluasi</p>
                    <div className="flex items-center justify-center gap-2 text-red-500">
                        <svg className="size-3.5" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-xs">Metode Konvensional</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-grad2">
                        <svg className="size-3" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs">IoT dan Sistem ERP TemanTernak</p>
                    </div>
                </div>

                {/* Row Tabel */}
                <div className="divide-y-2 divide-muted rounded-xl bg-white ring ring-gray-200 p-1">
                    {comparisonRows.map((row) => (
                        <div key={row.parameter} className="grid grid-cols-3 items-center py-3 text-center text-sm">
                            <div className="font-medium text-[11px]">{row.parameter}</div>
                            <div className="text-neutral-400 text-[11px]">{row.conventional}</div>
                            <div className="text-grad2 text-[11px]">{row.erp}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comparison