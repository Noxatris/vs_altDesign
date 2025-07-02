"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

import AccountMenu from "../account/accountMenu"; // Adjust the import path as necessary

const navGroups = [
    {
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
                ],
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
        items: [
            { name: "Wiki", href: "https://wiki.vintagestory.at/Main_Page/fr", sub: [] },
            { name: "Mods", href: "https://mods.vintagestory.at/", sub: [] },
            { name: "Chat", href: "https://discord.com/invite/CkJjdrB", sub: [] },
        ],
    },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const [openSub, setOpenSub] = useState<null | { name: string; href: string; sub: { label: string; href: string }[] }>(null);

    return (
        <>
            <button onClick={() => setOpen(true)} className="text-white">
                <Menu className="w-10 h-10 mt-2 mr-2" />
            </button>

            {/* Overlay */}
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* Sliding menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[95%] bg-zinc-900 z-50 text-white transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-zinc-700">
                    <AccountMenu />
                    <button onClick={() => setOpen(false)}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Navigation */}
                <div className="p-4">
                    {openSub === null ? (
                        // Menu principal
                        <>
                            {navGroups.map((group, i) => (
                                <div key={i} className={`pb-2 ${i !== navGroups.length - 1 ? "border-b border-zinc-700 mb-4" : ""}`}>
                                    {group.items.map((item, j) => {
                                        const hasSub = item.sub.length > 0;
                                        if (hasSub) {
                                            return (
                                                <button
                                                    key={j}
                                                    className="flex justify-between items-center w-full text-left px-2 py-2 hover:bg-zinc-800"
                                                    onClick={() => setOpenSub(item)}
                                                >
                                                    <span>{item.name}</span>
                                                    <span className="text-zinc-400">›</span>
                                                </button>
                                            );
                                        } else {
                                            return (
                                                <Link
                                                    key={j}
                                                    href={item.href}
                                                    className="block w-full px-2 py-2 hover:bg-zinc-800"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            );
                                        }
                                    })}
                                </div>
                            ))}
                        </>
                    ) : (
                        // Sous-menu
                        <>
                            <div className="flex items-center px-2 py-2 border-b border-zinc-700">
                                <button onClick={() => setOpenSub(null)} className="text-sm text-yellow-400 hover:underline">
                                    ← Back
                                </button>
                            </div>
                            <div className="px-2 py-2">
                                <Link href={openSub.href} className="block px-2 py-2 font-semibold text-lg text-green-400 hover:underline" onClick={() => setOpen(false)}>
                                    {openSub.name}
                                </Link>
                                {openSub.sub.map((sub, k) => (
                                    <Link
                                        key={k}
                                        href={sub.href}
                                        className="block px-2 py-1 text-zinc-300 hover:text-green-500"
                                        onClick={() => setOpen(false)}
                                    >
                                        {sub.label}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
