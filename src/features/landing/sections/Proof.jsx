import CustomBadge from "../components/CustomBadge";
import BlurText from "@/components/BlurText";
import FadeIn from "@/components/FadeIn";
import { Stagger, StaggerItem } from "../../../components/Stagger";

const Proof = () => {
    return (
        <div id="Proof" className="max-w-5xl pt-10 pb-16 w-full flex items-center justify-between">

            {/* Bagian Kiri */}
            <div className="flex flex-col space-y-1 flex-2">
                <BlurText
                    text="Teknologi Presisi untuk Optimasi Operasional Kandang"
                    effect="blur"
                    animateBy="words"
                    direction="bottom"
                    staggerFrom="start"
                    trigger="view"
                    delay={50}
                    stepDuration={0.30}
                    blur={10}
                    distance={20}
                    className="font-semibold text-2xl tracking-tight max-w-sm"
                    loop={false}
                    loopDelay={2}
                    focusOnHover={false}
                />
                <FadeIn delay={0.1}>
                    <p className="text-sm max-w-sm text-neutral-400 mt-1">Kombinasi sensor pintar dan software analytics untuk menjaga stabilitas ekosistem peternakan</p>
                </FadeIn>
                <Stagger className="flex gap-2 mt-3" delay={0.1}>
                    <StaggerItem>
                        <CustomBadge
                            text="Produk Segar"
                            icon={
                                <svg className="size-3 mr-1.5" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.86866 15.4599L7 22L11.5884 19.247C11.7381 19.1572 11.8129 19.1123 11.8928 19.0947C11.9634 19.0792 12.0366 19.0792 12.1072 19.0947C12.1871 19.1123 12.2619 19.1572 12.4116 19.247L17 22L16.1319 15.4571M16.4259 4.24888C16.5803 4.6224 16.8768 4.9193 17.25 5.0743L18.5589 5.61648C18.9325 5.77121 19.2292 6.06799 19.384 6.44154C19.5387 6.81509 19.5387 7.23481 19.384 7.60836L18.8422 8.91635C18.6874 9.29007 18.6872 9.71021 18.8427 10.0837L19.3835 11.3913C19.4602 11.5764 19.4997 11.7747 19.4997 11.975C19.4998 12.1752 19.4603 12.3736 19.3837 12.5586C19.3071 12.7436 19.1947 12.9118 19.0531 13.0534C18.9114 13.195 18.7433 13.3073 18.5582 13.3839L17.2503 13.9256C16.8768 14.0801 16.5799 14.3765 16.4249 14.7498L15.8827 16.0588C15.728 16.4323 15.4312 16.7291 15.0577 16.8838C14.6841 17.0386 14.2644 17.0386 13.8909 16.8838L12.583 16.342C12.2094 16.1877 11.7899 16.188 11.4166 16.3429L10.1077 16.8843C9.73434 17.0387 9.31501 17.0386 8.94178 16.884C8.56854 16.7293 8.27194 16.4329 8.11711 16.0598L7.57479 14.7504C7.42035 14.3769 7.12391 14.08 6.75064 13.925L5.44175 13.3828C5.06838 13.2282 4.77169 12.9316 4.61691 12.5582C4.46213 12.1849 4.46192 11.7654 4.61633 11.3919L5.1581 10.0839C5.31244 9.71035 5.31213 9.29079 5.15722 8.91746L4.61623 7.60759C4.53953 7.42257 4.50003 7.22426 4.5 7.02397C4.49997 6.82369 4.5394 6.62536 4.61604 6.44032C4.69268 6.25529 4.80504 6.08716 4.94668 5.94556C5.08832 5.80396 5.25647 5.69166 5.44152 5.61508L6.74947 5.07329C7.12265 4.91898 7.41936 4.6229 7.57448 4.25004L8.11664 2.94111C8.27136 2.56756 8.56813 2.27078 8.94167 2.11605C9.3152 1.96132 9.7349 1.96132 10.1084 2.11605L11.4164 2.65784C11.7899 2.81218 12.2095 2.81187 12.5828 2.65696L13.8922 2.11689C14.2657 1.96224 14.6853 1.96228 15.0588 2.11697C15.4322 2.27167 15.729 2.56837 15.8837 2.94182L16.426 4.25115L16.4259 4.24888Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <CustomBadge
                            text="Teknologi IoT"
                            icon={
                                <svg className="size-3 mr-1.5" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.2426 7.75738C18.5858 10.1005 18.5858 13.8995 16.2426 16.2427M7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75735M4.92893 19.0711C1.02369 15.1658 1.02369 8.8342 4.92893 4.92896M19.0711 4.929C22.9763 8.83424 22.9763 15.1659 19.0711 19.0711M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <CustomBadge
                            text="Sistem ERP"
                            icon={
                                <svg className="size-3 mr-1.5" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12H4.6C4.03995 12 3.75992 12 3.54601 12.109C3.35785 12.2049 3.20487 12.3578 3.10899 12.546C3 12.7599 3 13.0399 3 13.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 8.6C9 8.03995 9 7.75992 9.10899 7.54601C9.20487 7.35785 9.35785 7.20487 9.54601 7.10899C9.75992 7 10.0399 7 10.6 7H13.4C13.9601 7 14.2401 7 14.454 7.10899C14.6422 7.20487 14.7951 7.35785 14.891 7.54601C15 7.75992 15 8.03995 15 8.6V21M15 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H16.6C16.0399 3 15.7599 3 15.546 3.10899C15.3578 3.20487 15.2049 3.35785 15.109 3.54601C15 3.75992 15 4.03995 15 4.6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                    </StaggerItem>
                </Stagger>
            </div>

            {/* Bagian Kanan */}
            <FadeIn delay={0.1} duration={0.5} y={24}>
                <div className="flex gap-3 flex-1">
                    <div className="h-52 flex flex-col gap-2 w-full bg-gray-100 ring ring-gray-200 rounded-xl flex-1 p-2">
                        <div className="h-20 bg-white ring ring-gray-200 rounded-lg p-5">

                        </div>
                        <div className="p-1 flex flex-col space-y-1">
                            <p className="text-3xl font-bold flex items-center">
                                <span className="inline-flex items-center">12</span>
                                <span className="inline-flex items-center transform -translate-y-0.5">+</span>
                            </p>
                            <p className="text-xs text-neutral-500 font-semibold mt-1">Kandang Terkelola</p>
                            <p className="text-[10px] text-neutral-400 leading-snug">Mulai dari peternakan kecil hingga skala komersial</p>
                        </div>
                    </div>
                    <div className="h-52 w-full flex flex-col gap-3 flex-1">
                        <div className="h-20 bg-gray-100 ring ring-gray-200 rounded-xl p-4 flex flex-col justify-end flex-1">
                            <p className="text-3xl font-bold flex items-center">
                                <span className="inline-flex items-center">15</span>
                                <span className="inline-flex items-center">%</span>
                            </p>
                            <p className="text-xs text-neutral-500 font-semibold mt-1">Hemat Pakan</p>
                        </div>
                        <div className="h-20 bg-gray-100 ring ring-gray-200 rounded-xl p-4 flex flex-col justify-end flex-1">
                            <p className="text-3xl font-bold flex items-center">
                                <span className="inline-flex items-center">50</span>
                                <span className="inline-flex items-center transform -translate-y-0.5">+</span>
                            </p>
                            <p className="text-xs text-neutral-500 font-semibold mt-1">Peternak Terbantu</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}

export default Proof;