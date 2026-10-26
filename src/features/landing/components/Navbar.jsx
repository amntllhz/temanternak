import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/temanternak-logo.svg";
import ButtonDemo from "./ButtonDemo";
import { navLinks } from "../data/nav";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const close = () => setOpen(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="right-scroll-bar-position fixed top-0 left-0 right-0 z-50">
            {/* wrapper: atur lebar + margin */}
            <div
                className={cn(
                    "relative mx-auto mt-3 w-[calc(100%-2rem)] max-w-5xl transition-all duration-200 ease-out",
                    scrolled
                        ? "md:mt-3 md:w-[calc(100%-2rem)] md:max-w-5xl"
                        : "md:mt-0 md:w-full md:max-w-6xl"
                )}
            >
                {/* bar: atur background + blur + padding */}
                <div
                    className={cn(
                        "flex items-center justify-between rounded-xl bg-white/10 px-5 py-3 backdrop-blur-md transition-all duration-200 ease-out",
                        scrolled
                            ? "md:bg-white/10 md:px-5 md:py-3 md:backdrop-blur-md"
                            : "md:bg-transparent md:px-4 md:py-5 md:backdrop-blur-[0px]"
                    )}
                >
                    <a href="#" onClick={close}>
                        <img src={Logo} alt="TemanTernak" className="w-32 md:w-36" />
                    </a>

                    {/* desktop */}
                    <nav className="hidden items-center gap-6 md:flex">
                        {navLinks.map(({ label, href }) => (
                            <a key={label} href={href} className="text-xs font-medium hover:text-grad2 transition-all duration-200 ease-in-out">
                                {label}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <ButtonDemo />
                    </div>

                    {/* mobile toggle */}
                    <button
                        type="button"
                        className="rounded-lg p-2 md:hidden"
                        aria-label={open ? "Tutup menu" : "Buka menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((o) => !o)}
                    >
                        {open ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>

                {/* mobile panel: sibling bar, lebar ikut wrapper */}
                {open && (
                    <nav className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-xl border border-white/30 bg-white/60 p-4 backdrop-blur-lg md:hidden">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={close}
                                className="rounded-lg px-3 py-3 text-sm font-medium hover:text-grad2"
                            >
                                {label}
                            </a>
                        ))}
                        <div className="mt-2" onClick={close}>
                            <ButtonDemo />
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;