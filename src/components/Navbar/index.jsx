
import { useState } from "react";
import { FaGithub, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import "./styles.scss"

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative w-full px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900" id="navbar">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* LEFT */}
                <div className="flex items-center">
                {/* Hamburger – mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden"
                    >
                        {open ? <HiX size={22} /> : <HiMenu size={22} />}
                    </button>

                {/* Social icons – desktop */}
                    <div className="hidden md:flex items-center gap-5 ml-2">
                        <SocialIcon><FaGithub className="social-icons"/></SocialIcon>
                        <SocialIcon><FaInstagram className="social-icons"/></SocialIcon>
                        <SocialIcon><FaTiktok className="social-icons"/></SocialIcon>
                        <SocialIcon><FaTwitter className="social-icons"/></SocialIcon>
                    </div>
                </div>

                {/* RIGHT – always visible */}
                <div className="flex items-center gap-4">
                    <button className="text-sm">
                        <p className="btn-login">Log in</p>
                    </button>

                    <button className="btn-signup px-4 py-2 rounded-full text-sm" >
                        Sign up
                    </button>

                    <button
                        onClick={() => setDark(!dark)}
                        className="p-2 rounded-full  dark:border-neutral-700"
                    >
                        {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
                    </button>
                </div>
            </div>

            {/* MOBILE SOCIAL MENU */}
            <div
                className={`
                    md:hidden
                    absolute left-4 top-full mt-3
                    overflow-hidden
                    transition-all duration-300 ease-out
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
            >
                <div
                    className="
                        flex flex-col gap-4
                        px-1 py-4
                        backdrop-blur-lg
                        bg-transparent
                        shadow-lg
                        "
                        style={{ width: "4.5rem" }} // ~4x icon width
                >
                    <SocialIcon><FaGithub className="social-icons"/></SocialIcon>
                    <SocialIcon><FaInstagram className="social-icons"/></SocialIcon>
                    <SocialIcon><FaTiktok className="social-icons"/></SocialIcon>
                    <SocialIcon><FaTwitter className="social-icons"/></SocialIcon>
                </div>
            </div>
        </nav>
    );
}

function SocialIcon({ children }) {
    return (
        <a
            href="#"
            className="
                text-xl
                hover:opacity-50
                transition
            "
        >
            {children}
        </a>
    );
}