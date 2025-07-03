import LandingNav from "./landingNav";
import SocialNav from "../socialNav";
import LandingSearch from "../landingSearch";
import AccountMenu from "../account/accountMenu";
import Link from "next/link";

export default function DesktopHeader() {
    return (
        <header>
            <div className="flex flex-col md:flex-row items-center px-16 py-2 text-white">
                <Link href="/" className="mb-4 xl:mb-0"><img src="/studioLogo.svg" className="h-16 mr-4" alt="" /></Link>
                <SocialNav />
                <AccountMenu />
            </div>
            <div className="flex items-center justify-between px-4 py-2 text-white">
                <LandingNav />
                <LandingSearch />
            </div>

        </header>
    );
}