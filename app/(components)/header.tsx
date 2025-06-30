import LandingNav from "./landingNav";
import SocialNav from "./socialNav";
import LandingSearch from "./landingSearch";
import AccountMenu from "./accountMenu";

export default function Header() {
    return (
        <header>
            <div className="flex items-center px-16 py-2 text-white">
                <img src="/studioLogo.svg" className="h-16 mr-4" alt="" />
                <SocialNav />
                <AccountMenu  />
            </div>
            <div className="flex items-center justify-between px-4 py-2 text-white">
                <LandingNav />
                <LandingSearch />
            </div>

        </header>
    )
}