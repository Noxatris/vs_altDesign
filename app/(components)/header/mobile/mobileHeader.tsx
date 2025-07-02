import LandingNav from "./landingNav";
import SocialNav from "../socialNav";
import LandingSearch from "../landingSearch";

export default function MobileHeader() {
    return (
        <header>
            <div className="flex flex-col md:flex-row items-center px-16 py-2 text-white">
                <img src="/studioLogo.svg" className="h-16 mr-4" alt="" />
                <SocialNav />

            </div>
            <div className="fixed top-0 right-0 flex items-center justify-between px-4 py-2 text-white">
                <LandingNav />     
            </div>
            <LandingSearch />

        </header>
    );
}