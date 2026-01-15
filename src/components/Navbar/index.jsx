import { useState } from "react";
import { FaGithub, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import kernel from "/kernel-nobg.png"

import "./styles.scss"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            id="navbar"
            className="relative w-full px-4 py-3 border-b border-border-subtle bg-bg-main"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* LEFT */}
                <a href="/">
                    <div className="flex items-center relative group">
                        <img 
                            src={kernel} 
                            alt="kernel logo" 
                            className="
                                w-[1.2rem] z-10"
                        />
                        <span className="absolute left-18 text-xl font-serif text-text-main z-0 translate-x-[-100%] opacity-0 transition-all duration-400 group-hover:left-20 group-hover:opacity-100"
                        >
                            Kernel
                        </span>
                    </div>
                </a>

                {/* RIGHT */}
                    <div className="flex items-center">
                    {/* Hamburger – mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-text-main mobile p-2 rounded-md hover:bg-bg-surface transition"
                    >
                        {open ? <HiX size={22} /> : <HiMenu size={22} />}
                    </button>

                    {/* Social icons – desktop */}
                    <div className="flex items-center gap-5 ml-4 desktop">
                        <SocialIcon href="https://github.com/Kotige">
                            <FaGithub />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/modvestudio/">
                            <FaInstagram />
                        </SocialIcon>
                        <SocialIcon href="https://www.tiktok.com/@modvestudio">
                            <FaTiktok />
                        </SocialIcon>
                    </div>
                </div>
            </div>

            {/* MOBILE SOCIAL MENU */}
            <div
                className={`
                    mobile absolute right-4 top-full mt-3
                    transition-all duration-300 ease-out
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                    `}
            >
                <div className="flex flex-col gap-4 p-4 rounded-lg bg-bg-surface shadow-lg">
                    <SocialIcon href="https://github.com/Kotige">
                        <FaGithub />
                    </SocialIcon>
                    <SocialIcon href="https://www.instagram.com/modvestudio/">
                        <FaInstagram />
                    </SocialIcon>
                    <SocialIcon href="https://www.tiktok.com/@modvestudio">
                        <FaTiktok />
                    </SocialIcon>
                </div>
            </div>
        </nav>
    );
}

function SocialIcon({ children, href = "#" }) {
    return (
        <a
            href={href}
            target="_blank"
            className="text-xl text-text-muted hover:text-accent transition"
        >
            {children}
        </a>
    );
}
