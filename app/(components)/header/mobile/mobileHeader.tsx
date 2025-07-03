import LandingNav from "./landingNav";
import SocialNav from "../socialNav";
import LandingSearch from "../landingSearch";

import Link from "next/link";
import { Newspaper } from "lucide-react";

export default function MobileHeader() {
    return (
        <header>
            <div className="flex flex-col md:flex-row items-center px-16 py-2 text-white">
                <Link href="/" className="mb-4"><img src="/studioLogo.svg" className="h-16 mr-4" alt="" /></Link>
                <SocialNav />

            </div>
            <div className="fixed top-0 right-0 flex items-center justify-between px-4 py-2 text-white">
                <LandingNav />
            </div>
            <div className="flex justify-end items-center px-4 py-2 text-white">
                <LandingSearch />
                <Link href="/discover" className="px-6 py-2 bg-green-800 hover:bg-green-700 text-white font-[Amendra] text-xl rounded-md transition tracking-wider shadow-md"><Newspaper /></Link>
            </div>

        </header>
    );
}