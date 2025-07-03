"use client"
import { useState } from "react"
import { Bell, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"

import NotificationSection from "./notificationSection"
import MessageSection from "./messageSection"
import UserSub from "./userSub"

function Dropdown({ isOpen, children }: { isOpen: boolean, children: React.ReactNode }) {
    if (!isOpen) return null
    return (
        <div className="">
            {children}
        </div>
    )
}

export default function UserMenu({ setIsLogin }: { setIsLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [openMenu, setOpenMenu] = useState<null | "notif" | "msg" | "profile" | "pseudo">(null)

    const toggle = (menu: typeof openMenu) =>
        setOpenMenu((prev) => (prev === menu ? null : menu))

    return (
        <div className="flex items-center space-x-4 relative">
            {/* Notifications */}
            <div className="relative">
                <button onClick={() => toggle("notif")} className="hover:text-green-700 hover:cursor-pointer">
                    <Bell />
                </button>
                <Dropdown isOpen={openMenu === "notif"}>
                    <NotificationSection />
                </Dropdown>
            </div>

            {/* Messages */}
            <div className="relative">
                <button onClick={() => toggle("msg")} className="hover:text-green-700 hover:cursor-pointer">
                    <Mail />
                </button>
                <Dropdown isOpen={openMenu === "msg"}>
                    <MessageSection />
                </Dropdown>
            </div>

            {/* Profile image (can redirect or open more options) */}
            <div className="relative">
                <Link href="#">
                    <img src="/defaultPP.png" alt="profile" className="rounded-full w-8 h-8 overflow-hidden hover:cursor-pointer" />
                </Link>
            </div>

            {/* Username dropdown */}
            <div className="relative">
                <button onClick={() => toggle("pseudo")} className="font-[Almendra] text-[1.3em] flex items-center space-x-2 transition rounded-full text-white hover:text-green-700 hover:cursor-pointer">
                    <p>Pseudo</p>
                    <ChevronDown />
                </button>
                <Dropdown isOpen={openMenu === "pseudo"}>
                    <UserSub setIsLogin={setIsLogin}/>
                </Dropdown>
            </div>
        </div>
    )
}
