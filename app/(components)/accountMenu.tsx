'use client'

import { useEffect, useRef, useState } from "react"

import SignupSection from "./signupSection"
import SigninSection from "./signinSection"
import UserMenu from "./userMenu"


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
            document.addEventListener("click", handleClickOutside)
        } else {
            document.removeEventListener("click", handleClickOutside)
        }

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [showLoginForm])

    return (
        <>
            <div className="relative flex items-center justify-end text-white px-4 py-2 ml-auto">
                {isLogin ? (
                    <UserMenu setIsLogin={setIsLogin}/>
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
                               <SigninSection setIsLogin={setIsLogin}/>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* Modal Sign Up */}
            {showModal && (
                <SignupSection setIsLogin={setIsLogin} setShowModal={setShowModal}/>
            )}
        </>
    )
}
