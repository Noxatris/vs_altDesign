import SignupForm from "./signupForm";

export default function SignupSection({ setIsLogin, setShowModal }: { setIsLogin: React.Dispatch<React.SetStateAction<boolean>>, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
        >
            <div
                className="bg-zinc-900 text-white p-8 rounded-xl shadow-xl w-[100%] max-w-xl border border-green-900 max-h-[80vh] overflow-y-scroll custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4 text-center font-[EDGaramond]">
                    Sign Up
                </h2>
                <div className="flex flex-col space-y-4 mb-12 border-b-2 border-white pb-8 px-4">
                    <h3>Get started faster</h3>
                    <p>Connect via one of these sites.</p>
                    <button className="flex items-center justify-around bg-[#3b5998] hover:bg-[#314e89] transition text-white font-medium py-2 px-4 rounded w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
                        <p className="w-[95%]">Sign in with Facebook</p>
                    </button>
                    <button className="flex items-center justify-around bg-black hover:bg-slate-950 transition text-white font-medium py-2 px-4 rounded w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        <p className="w-[95%]">Sign in with X</p>
                    </button>
                    <button className="flex items-center justify-around bg-[#1da1f2] hover:bg-[#1d92f2] transition text-white font-medium py-2 px-4 rounded w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        <p className="w-[95%]">Sign in with Google</p>
                    </button>
                </div>
                <SignupForm setIsLogin={setIsLogin} setShowModal={setShowModal} />

            </div>
        </div>
    )
}