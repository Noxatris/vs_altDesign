"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icônes pour hamburger

const navGroups = [
    {
        name: "Main",
        className: "",
        items: [
            {
                name: "Home",
                href: "/",
                sub: [
                    { label: "System Requirements", href: "/sysrequirements" },
                    { label: "Server hosting", href: "/faq.html" },
                    { label: "Frequently Asked Questions", href: "/faq.html" },
                    { label: "About us", href: "/aboutus.html" },
                    { label: "Jobs", href: "/jobs.html" },
                ],
            },
            {
                name: "Devlog",
                href: "/blog.html",
                sub: [
                    { label: "Roadmap", href: "/roadmap.html" },
                    { label: "News", href: "/news" },
                    { label: "Community Showcase and Events", href: "/community-spotlight-events" },
                ],
            },
            {
                name: "Media",
                href: "/media.html",
                sub: [
                    { label: "Press kit", href: "/presskit.html" },
                    { label: "Story Excerpt - The Morning", href: "/stories/storyexcerpt-themorning.html" },
                    { label: "Story Excerpt - Ghosts", href: "/stories/storyexcerpt-ghosts.html" },
                ]
            },
            { name: "Forums", href: "/forums", sub: [] },
            { name: "Buy", href: "/store/category/1-game-account-game-servers", sub: [] },
            {
                name: "Client Area",
                href: "/",
                sub: [
                    { label: "Support", href: "/support" },
                    { label: "Downloads", href: "/" },
                ],
            },
        ],
    },
    {
        name: "Community",
        className: "",
        items: [
            { name: "Wiki", href: "https://wiki.vintagestory.at/Main_Page/fr", sub: [] },
            { name: "Mods", href: "https://mods.vintagestory.at/", sub: [] },
            { name: "Chat", href: "https://discord.com/invite/CkJjdrB", sub: [] },
        ],
    },
];

export default function Navbar() {
    const [openSub, setOpenSub] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleSubMenu = (indexKey: string) => {
        setOpenSub((prev) => (prev === indexKey ? null : indexKey));
    };

    const handleMouseEnter = (indexKey: string) => {
        if (typeof window !== "undefined" && window.innerWidth > 768) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setOpenSub(indexKey);
        }
    };

    const handleMouseLeave = () => {
        if (typeof window !== "undefined" && window.innerWidth > 768) {
            timeoutRef.current = setTimeout(() => setOpenSub(null), 200);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const close = () => setMobileMenuOpen(false);
            window.addEventListener("resize", close);
            return () => window.removeEventListener("resize", close);
        }
    }, []);

    return (
        <nav className="relative px-4 py-3 font-[UncialAntiqua] text-xl">
            {/* Mobile toggle */}
            <div className="md:hidden flex justify-between items-center">
                <button
                    className="text-white"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={32} />
                </button>
                <span className="text-yellow-400 text-2xl">MENU</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
                {navGroups.map((group, i) => (
                    <div key={i} className={`flex space-x-8 px-4 py-2 mx-8 ${group.className}`}>
                        {group.items.map((item, j) => {
                            const hasSub = item.sub.length > 0;
                            const indexKey = `${i}-${j}`;
                            const isOpen = openSub === indexKey;

                            return (
                                <div
                                    key={j}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(indexKey)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={item.href || "#"}
                                        className="hover:text-yellow-400 transition whitespace-nowrap"
                                        onFocus={() => setOpenSub(indexKey)}
                                        onBlur={() => setTimeout(() => setOpenSub(null), 150)}
                                    >
                                        {item.name}
                                    </Link>

                                    {hasSub && (
                                        <div
                                            className={`absolute -left-5 top-full mt-2 rounded z-10 transition-all duration-200 ${isOpen
                                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                                    : "opacity-0 -translate-y-1 pointer-events-none"
                                                }`}
                                        >
                                            <div className="flex flex-col px-4 py-2 gap-2 min-w-[160px]">
                                                {item.sub.map((sub, k) => (
                                                    <Link
                                                        key={k}
                                                        href={sub.href}
                                                        className="text-[1.1em] px-2 py-1 hover:border-l-4 border-green-500 hover:text-green-500 whitespace-nowrap font-[Almendra]"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Mobile slide-in menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[95%] bg-zinc-900 text-white z-50 transform transition-transform duration-300 overflow-y-auto
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center px-4 py-3 border-b border-green-800">
                    <h2 className="text-yellow-400 text-2xl font-[Almendra]">Menu</h2>
                    <button
                        className="text-white"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="p-4 space-y-6">
                    {navGroups.map((group, i) => (
                        <div key={i} className={group.className}>
                            {group.items.map((item, j) => {
                                const hasSub = item.sub.length > 0;
                                const indexKey = `${i}-${j}`;
                                const isOpen = openSub === indexKey;

                                return (
                                    <div key={j} className="mb-4">
                                        <button
                                            className="w-full text-left font-[UncialAntiqua] text-xl text-yellow-300"
                                            onClick={() => (hasSub ? toggleSubMenu(indexKey) : setMobileMenuOpen(false))}
                                        >
                                            <Link href={item.href || "#"}>{item.name}</Link>
                                        </button>

                                        {hasSub && isOpen && (
                                            <div className="mt-2 ml-4 space-y-2">
                                                {item.sub.map((sub, k) => (
                                                    <Link
                                                        key={k}
                                                        href={sub.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="block text-[1em] text-green-400 hover:text-yellow-400 font-[Almendra]"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}