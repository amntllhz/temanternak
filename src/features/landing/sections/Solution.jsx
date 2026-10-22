import HeadingSection from "../components/HeadingSection"
import HardwareImg from "@/assets/hardware.svg"
import DashboardImg from "@/assets/chart.svg"

const Solution = () => {
    return (
        <div id="Solution" className="max-w-5xl py-24 w-full flex flex-col space-y-8 mx-auto">
            <HeadingSection
                title="Solusi Integrasi"
                description="Kombinasi sensor pintar dan software analytics untuk menjaga stabilitas ekosistem peternakan"
            />

            <div className="flex flex-col space-y-12">
                {/* Solusi 1 */}
                <div className="max-w-5xl w-full flex items-center justify-between">

                    {/* Bagian Kiri */}
                    <div className="flex flex-col space-y-1 flex-2">
                        <p className="font-semibold text-lg tracking-tight">Implementasi IoT pada kandang</p>
                        <p className="text-xs max-w-xl text-neutral-400 mt-1 text-justify">Kandang puyuh modern dilengkapi dengan jaringan sensor yang bekerja 24 jam untuk memastikan kondisi optimal bagi ternak Anda. Setiap data yang dikumpulkan dikirim secara real-time ke cloud dan dapat dipantau melalui aplikasi mobile maupun dashboard web.</p>
                        <p className="text-xs max-w-xl text-neutral-400 mt-1 text-justify">Sensor yang terpasang meliputi DHT22 (suhu & kelembapan), MQ-137 (amonia NH₃), BH1750 (intensitas cahaya), Load Cell (konsumsi pakan), dan Flow Sensor (debit air minum). Semua dikendalikan oleh ESP32 Hub sebagai otak sistem IoT</p>
                    </div>

                    {/* Bagian Kanan */}
                    <div className="flex gap-3 flex-1 items-center justify-center">
                        <img src={HardwareImg} alt="hardware" className="w-56 object-cover rounded-xl" />
                    </div>
                </div>

                {/* Solusi 2 */}
                <div className="max-w-5xl w-full flex items-center justify-between">

                    {/* Bagian Kiri */}
                    <div className="flex gap-3 flex-1 items-center justify-start">
                        <img src={DashboardImg} alt="hardware" className="w-56 object-cover rounded-xl" />
                    </div>

                    {/* Bagian Kanan */}
                    <div className="flex flex-col space-y-1 flex-2">
                        <p className="font-semibold text-lg tracking-tight">Platform Manajemen Operasional ERP</p>
                        <p className="text-xs text-neutral-400 mt-1 text-justify">Semua data dari IoT kandang mengalir langsung ke sistem ERP TemanTernak. Peternak dapat memantau produksi telur harian, stok pakan, konsumsi energi, hingga keuangan usaha — semuanya dari satu dashboard yang mudah digunakan.</p>
                        <p className="text-xs text-neutral-400 mt-1 text-justify">Fitur utama ERP: pencatatan produksi harian otomatis, manajemen kandang & flock, analisis KPI (FCR, Hen-Day, mortalitas), laporan keuangan, manajemen stok pakan & kemasan, serta notifikasi cerdas saat ada anomali produksi.</p>
                        <p className="text-xs text-neutral-400 mt-1 text-justify">Tersedia sebagai aplikasi mobile (Android) dan web dashboard. Data tersinkron real-time sehingga keputusan bisnis dapat diambil kapan saja dan di mana saja berdasarkan data aktual, bukan perkiraan.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Solution