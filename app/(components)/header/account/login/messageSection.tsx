import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react"
import MessageForm from "./messageForm";

export default function MessageSection() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="flex flex-col items-center p-1 rounded-xl w-[20vw]">
            <div className="w-full flex justify-between items-center mb-4 border-b-2 border-white pb-4 px-2">
                <h2 className="font-[Almendra] text-yellow-400 text-[1.3em]">Messages</h2>
                <button className="px-4 py-2 bg-green-700 rounded-xl hover:cursor-pointer hover:bg-green-500" onClick={() => {setShowModal(true)}}>Compose New</button>
            </div>
            <div className="w-full flex flex-col items-center justify-center min-h-[10vh] border-b-2 border-white pb-4 max-h-[50vh] overflow-y-scroll custom-scrollbar">
                <p className="text-gray-500">There are no messages to display</p>
            </div>
            <Link href="/" className="flex items-center text-blue-500 mt-6"><Menu className="mr-1" /> Go to inbox</Link>

            {showModal && (
                <MessageForm setShowModal={setShowModal}/>
            )}
        </div>
    )
}