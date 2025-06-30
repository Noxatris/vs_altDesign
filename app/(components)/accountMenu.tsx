'use client'

import { useState } from "react";

export default function AccountMenu() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="relative flex items-center justify-between bg-zinc-900 text-white px-4 py-2 ml-auto">
            {isLogin ? (
                <div className="flex items-center space-x-4">
                    <span className="text-white">Welcome, User</span>
                    <button className="text-white hover:text-yellow-400 transition">Profile</button>
                    <button className="text-white hover:text-yellow-400 transition">Logout</button>
                </div>
            ) : (
                <div className="flex items-center space-x-4">   
                    <button className="text-white hover:text-yellow-400 transition" onClick={() => setIsLogin(true)}>Existing user? Sign In</button>
                    <button className="bg-green-500 p-2 rounded-xl text-white hover:text-yellow-400 transition">Sign Up</button>
                </div>
            )}
        </div>
    );
}