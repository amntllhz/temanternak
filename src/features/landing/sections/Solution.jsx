import HeadingSection from "../components/HeadingSection"
import HardwareImg from "@/assets/landing/hardware.svg"
import DashboardImg from "@/assets/landing/chart.svg"
import { Stagger, StaggerItem } from "../../../components/Stagger"
import FadeIn from "../../../components/FadeIn"

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
                    <Stagger className="flex flex-col space-y-1 flex-2" delay={0.1}>
                        <StaggerItem>
                            <p className="font-semibold text-lg tracking-tight">Implementasi IoT pada kandang</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-xs max-w-xl text-neutral-400 mt-1 text-justify">Kandang puyuh modern dilengkapi dengan jaringan sensor yang bekerja 24 jam untuk memastikan kondisi optimal bagi ternak Anda. Setiap data yang dikumpulkan dikirim secara real-time ke cloud dan dapat dipantau melalui aplikasi mobile maupun dashboard web.</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-xs max-w-xl text-neutral-400 mt-1 text-justify">Sensor yang terpasang meliputi DHT22 (suhu & kelembapan), MQ-137 (amonia NH₃), BH1750 (intensitas cahaya), Load Cell (konsumsi pakan), dan Flow Sensor (debit air minum). Semua dikendalikan oleh ESP32 Hub sebagai otak sistem IoT</p>
                        </StaggerItem>
                    </Stagger>

                    {/* Bagian Kanan */}

                    <div className="flex gap-3 flex-1 items-center justify-center">
                        <FadeIn delay={0.1} duration={0.5} y={24}>
                            <img src={HardwareImg} alt="hardware" className="w-56 object-cover rounded-xl" />
                        </FadeIn>
                    </div>
                </div>

                {/* Solusi 2 */}
                <div className="max-w-5xl w-full flex items-center justify-between">

                    {/* Bagian Kiri */}

                    <div className="flex gap-3 flex-1 items-center justify-start">
                        <FadeIn delay={0.2} duration={0.5} y={24}>
                            <img src={DashboardImg} alt="hardware" className="w-56 object-cover rounded-xl" />
                        </FadeIn>
                    </div>

                    {/* Bagian Kanan */}
                    <Stagger className="flex flex-col space-y-1 flex-2 " delay={0.2}>
                        <StaggerItem>
                            <p className="font-semibold text-lg tracking-tight">Platform Manajemen Operasional ERP</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-xs text-neutral-400 mt-1 text-justify">Semua data dari IoT kandang mengalir langsung ke sistem ERP TemanTernak. Peternak dapat memantau produksi telur harian, stok pakan, konsumsi energi, hingga keuangan usaha — semuanya dari satu dashboard yang mudah digunakan.</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-xs text-neutral-400 mt-1 text-justify">Fitur utama ERP: pencatatan produksi harian otomatis, manajemen kandang & flock, analisis KPI (FCR, Hen-Day, mortalitas), laporan keuangan, manajemen stok pakan & kemasan, serta notifikasi cerdas saat ada anomali produksi.</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-xs text-neutral-400 mt-1 text-justify">Tersedia sebagai aplikasi mobile (Android) dan web dashboard. Data tersinkron real-time sehingga keputusan bisnis dapat diambil kapan saja dan di mana saja berdasarkan data aktual, bukan perkiraan.</p>
                        </StaggerItem>
                    </Stagger>

                </div>
            </div>
        </div >
    )
}

export default Solution