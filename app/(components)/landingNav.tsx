// components/Navbar.tsx
import Link from "next/link";
import React from "react";

const navGroups = [
    {
        name: "Main", // Nom optionnel
        className: "", // Tu peux aussi définir une classe spécifique ici
        items: [
            {
                name: "Home",
                sub: [
                    { label: "System Requirements", href: "/home/1" },
                    { label: "Server hosting", href: "/home/2" },
                    { label: "FAQ", href: "/home/3" },
                    { label: "About us", href: "/home/4" },
                    { label: "Jobs", href: "/home/5" },
                ],
            },
            {
                name: "Devlog",
                sub: [
                    { label: "Roadmap", href: "/devlog/1" },
                    { label: "News", href: "/devlog/2" },
                ],
            },
            {
                name: "Media",
                sub: [],
            },
            {
                name: "Forums",
                sub: [],
            },
            {
                name: "Buy",
                sub: [],
            },
            {
                name: "Client Area",
                sub: [
                    { label: "Support", href: "/client/support" },
                    { label: "Downloads", href: "/client/downloads" },
                ],
            },
        ],
    },
    {
        name: "Community",
        className: "",
        items: [
            {
                name: "Wiki",
                sub: [],
            },
            {
                name: "Mods",
                sub: [],
            },
            {
                name: "Chat",
                sub: [],
            },
        ],
    },
];


export default function Navbar() {

    return (
        <nav className="px-4 py-3">
            <div className="flex items-center">
                {navGroups.map((group, i) => (
                    <div
                        key={i}
                        className={`flex space-x-8 bg-zinc-900 px-4 py-2 mx-8 ${group.className}`}
                    >
                        {group.items.map((item, j) => (
                            <div key={j} className="relative group">
                                <button className="hover:text-yellow-400 transition">{item.name}</button>
                                {item.sub.length > 0 && (
                                    <div className="absolute left-0 top-full mt-2 bg-zinc-800 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition duration-150">
                                        <div className="flex px-4 py-2 gap-4">
                                            {item.sub.map((sub, k) => (
                                                <Link
                                                    key={k}
                                                    href={sub.href}
                                                    className="px-2 py-1 hover:bg-zinc-700 rounded whitespace-nowrap"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </nav>

    );
}
