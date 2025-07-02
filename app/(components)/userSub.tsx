import Link from "next/link"

export default function UserSub({ setIsLogin }: { setIsLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="flex flex-col space-y-4 px-4 py-2 text-white w-[15vw]">
            <div className="flex">
                <div className="w-[15%] h-[5vh] mr-2 flex items-center justify-center">
                    <img src="/Forum-WolfBaitALT.webp" alt="" className="flex items-center justify-center" />
                </div>
                <div className="w-[85%] flex flex-col justify-center">
                    <p className="text-gray-300">Your Current Rank</p>
                    <p><strong className="text-[1.1em]">Wolf Bait</strong> (1/9)</p>
                    <div className="w-[95%] rounded-md bg-gray-400 h-2 mt-4 mb-1"></div>
                    <p className="text-[.9em] text-gray-300">10 points until your next rank</p>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <h3 className="border-b-1 border-white pb-1">CONTENT</h3>
                <Link href="/" className="hover:cursor-pointer hover:text-green-500">Profile</Link>
                <Link href="/" className="hover:cursor-pointer hover:text-green-500">My Attachments</Link>
            </div>
            <div className="flex flex-col space-y-2">
                <h3 className="border-b-1 border-white pb-1">SETTINGS</h3>
                <Link href="/" className="hover:cursor-pointer hover:text-green-500">Manage Followed Content</Link>
                <Link href="/" className="hover:cursor-pointer hover:text-green-500">Account Settings</Link>
                <Link href="/" className="hover:cursor-pointer hover:text-green-500">Ignored Users</Link>
            </div>
            <button className="flex border-t-1 border-white pt-4 hover:cursor-pointer hover:text-green-500" onClick={(e) => {setIsLogin(false)}}>Sign Out</button>
        </div>
    )
}