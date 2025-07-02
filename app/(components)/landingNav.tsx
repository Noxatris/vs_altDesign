"use client";

import { useState, useRef } from "react";
import Link from "next/link";

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
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    const toggleSubMenu = (indexKey: string) => {
        setOpenSub(prev => (prev === indexKey ? null : indexKey));
    };

    const handleMouseEnter = (indexKey: string) => {
        if (!isMobile) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setOpenSub(indexKey);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            timeoutRef.current = setTimeout(() => setOpenSub(null), 200);
        }
    };

    return (
        <nav className="px-4 py-3 font-[UncialAntiqua] text-xl mx-auto">
            <div className="flex items-center">
                {navGroups.map((group, i) => (
                    <div
                        key={i}
                        className={`flex space-x-8 px-4 py-2 mx-8 ${group.className}`}
                    >
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
                                    {/* PC : lien direct si href */}
                                    <Link
                                        href={item.href || "#"}
                                        onClick={(e) => {
                                            if (isMobile && hasSub) {
                                                e.preventDefault(); // empêchera la redirection
                                                toggleSubMenu(indexKey);
                                            }
                                        }}
                                        className="hover:text-yellow-400 transition whitespace-nowrap"
                                        tabIndex={0}
                                        onFocus={() => !isMobile && setOpenSub(indexKey)}
                                        onBlur={() => !isMobile && setTimeout(() => setOpenSub(null), 150)}
                                    >
                                        {item.name}
                                    </Link>

                                    {hasSub && (
                                        <div
                                            className={`absolute -left-5 top-full mt-2 rounded z-10 transition-all duration-200
                                            ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                                                }`}
                                        >
                                            <div className="flex flex-col px-4 py-2 gap-2 min-w-[160px]">
                                                {isMobile && item.href && (
                                                    <Link
                                                        href={item.href}
                                                        className="px-2 py-1 text-sm italic text-zinc-400 hover:text-yellow-400"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                                {item.sub.map((sub, k) => (
                                                    <Link
                                                        key={k}
                                                        href={sub.href}
                                                        className="text-[1.1em] px-2 py-1 hover:border-l-3 border-green-500 hover:text-green-500 whitespace-nowrap font-[Almendra]"
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
        </nav>
    );
}
