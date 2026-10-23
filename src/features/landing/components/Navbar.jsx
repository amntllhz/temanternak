import Logo from "@/assets/temanternak-logo.svg"
import ButtonDemo from "./ButtonDemo";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between py-5 mx-auto max-w-6xl">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="logo" className="w-36" />
                </div>
                <div className="flex items-center gap-6">
                    <a href="#Proof" className="text-xs font-medium">Produk</a>
                    <a href="#Solution" className="text-xs font-medium">Solusi Integrasi</a>
                    <a href="#" className="text-xs font-medium">Analisis Usaha</a>
                    <a href="#" className="text-xs font-medium">Tentang</a>
                </div>
                <ButtonDemo />
            </div>
        </div>
    );
};

export default Navbar;