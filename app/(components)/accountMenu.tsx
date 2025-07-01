'use client'

import { useEffect, useRef, useState } from "react"

import SignupForm from "./signupForm"

export default function AccountMenu() {
    const [isLogin, setIsLogin] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const loginRef = useRef<HTMLDivElement>(null)

    // Gestion du clic à l'extérieur du dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
                setShowLoginForm(false)
            }
        }

        if (showLoginForm) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [showLoginForm])

    return (
        <>
            <div className="relative flex items-center justify-end text-white px-4 py-2 ml-auto">
                {isLogin ? (
                    <div className="flex items-center space-x-4">
                        <span className="text-white">Welcome, User</span>
                        <button className="text-white hover:text-yellow-400 transition">Profile</button>
                        <button className="text-white hover:text-yellow-400 transition">Logout</button>
                    </div>
                ) : (
                    <>
                        <div className="relative" ref={loginRef}>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setShowLoginForm((prev) => !prev)}
                                    className="text-white hover:text-yellow-400 transition"
                                >
                                    Existing user? Sign In
                                </button>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="bg-green-700 p-2 rounded-xl text-white hover:text-yellow-400 transition"
                                >
                                    Sign Up
                                </button>
                            </div>

                            {showLoginForm && (
                                <div className="flex flex-wrap justify-between absolute right-16 mt-2 bg-zinc-800 border border-green-900 rounded-xl p-4 w-[700px] shadow-xl z-50">
                                    <h3 className="text-yellow-400 text-lg font-[EBGaramond] text-[1.8em] mb-5 text-center w-full">
                                        Sign In
                                    </h3>
                                    <form className="flex flex-col space-y-3 w-[45%]">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="bg-zinc-900 p-2 rounded border border-zinc-700 text-white placeholder-zinc-400"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="bg-zinc-900 p-2 rounded border border-zinc-700 text-white placeholder-zinc-400"
                                        />
                                        <div>
                                            <input type="checkbox" id="remember" className="checked:accent-green-700 hover:cursor-pointer" />
                                            <label className="text-white hover:cursor-pointer ml-2" htmlFor="remember">
                                                Remember me
                                            </label>
                                            <p className="ml-8 mt-1 text-[.9em] italic">Not recommended on shared computers</p>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-green-700 hover:bg-green-600 transition rounded p-2 text-white font-semibold hover:cursor-pointer"
                                        >
                                            Sign In
                                        </button>
                                        <button className="text-blue-300 italic ml-auto mt-1 hover:cursor-pointer">Forgot your password ?</button>
                                    </form>
                                    <div className="flex flex-col items-center space-y-4 mb-4 w-[45%]">
                                        <h3>Or sign in with one of these services</h3>
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
                                        <button className="flex items-center justify-around bg-[#5865F2] hover:bg-[#4752c4] transition text-white font-medium py-2 px-4 rounded w-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" /></svg>
                                            <p className="w-[95%]">Login with Discord</p>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* Modal Sign Up */}
            {showModal && (
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
                        <SignupForm setIsLogin={setIsLogin} setShowModal={setShowModal}/>

                    </div>
                </div>
            )}
        </>
    )
}
