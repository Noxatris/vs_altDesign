import Link from "next/link";
import { Settings, Menu } from "lucide-react";

export default function NotificationSection() {
    return (
        <div className="absolute -left-5 top-10 xl:left-auto xl:right-0 bg-zinc-800 border border-green-900 rounded-xl p-4 shadow-xl z-50 flex flex-col items-center w-[90vw] max-w-[450px] sm:w-[25vw]">
            <div className="w-full flex justify-between items-center mb-4 border-b-2 border-white pb-4 px-2">
                <h2 className="font-[Almendra] text-yellow-400 text-[1.3em]">Notifications</h2>
                <Link href="" className="flex items-center text-blue-500"><Settings className="mr-1"/> Notification Settings</Link>
            </div>
            <div className="w-full flex flex-col items-center justify-center min-h-[10vh] border-b-2 border-white pb-4 max-h-[50vh] overflow-y-scroll custom-scrollbar">
                <p className="text-gray-500">There are no notifications to display</p>
            </div>
            <Link href="/" className="flex items-center text-blue-500 mt-6"><Menu className="mr-1"/> View all notifications</Link>
        </div>
    )
}