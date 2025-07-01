'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function getPasswordStrength(password: string) {
    let score = 0
    if (password.length >= 6) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++
    if (password.length >= 12) score++

    const levels = ['Very Weak', 'Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong']
    const colors = ['bg-red-500', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-emerald-600']

    return {
        label: levels[score],
        color: colors[score],
        score,
    }
}

export default function SignupForm({ setIsLogin, setShowModal }: { setIsLogin: React.Dispatch<React.SetStateAction<boolean>>, setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
    const [passwordStrength, setPasswordStrength] = useState(getPasswordStrength(''))

    useEffect(() => {
        setPasswordStrength(getPasswordStrength(password))
    }, [password])

    const handleBlur = (field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }))
    }

    const isPasswordMatch = password === confirmPassword

    const showError = (field: string, condition: boolean) => touched[field] && condition

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validation simple
        if (!displayName || !email || !password || !confirmPassword || !isPasswordMatch) return

        setIsLogin(true)
        setShowModal(false)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">

            {/* Display Name */}
            <div>
                <p>Display Name</p>
                <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    onBlur={() => handleBlur('displayName')}
                    required
                    placeholder="Display Name"
                    className={`bg-zinc-800 p-2 rounded border w-full mt-2 text-white placeholder-zinc-400 
            ${showError('displayName', !displayName) ? 'border-red-500' : 'border-zinc-700'}
            focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
                {showError('displayName', !displayName) && <p className="text-red-500 text-sm mt-1">Display name is required.</p>}
            </div>

            {/* Email */}
            <div>
                <p>Email Address</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    required
                    placeholder="Email"
                    className={`bg-zinc-800 p-2 rounded border w-full mt-2 text-white placeholder-zinc-400 
            ${showError('email', !email) ? 'border-red-500' : 'border-zinc-700'}
            focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
                {showError('email', !email) && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
            </div>

            {/* Password */}
            <div>
                <p>Password</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    required
                    placeholder="Password"
                    className={`bg-zinc-800 p-2 rounded border w-full mt-2 mb-2 text-white placeholder-zinc-400 
            ${showError('password', !password) ? 'border-red-500' : 'border-zinc-700'}
            focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
                <div className="w-full h-2 mt-2 rounded bg-zinc-700 overflow-hidden">
                    <div className={`h-full transition-all duration-300 ${passwordStrength.color}`} style={{ width: `${(passwordStrength.score + 1) * 20}%` }} />
                </div>
                <p className={`text-sm mt-1 ${passwordStrength.color.replace('bg-', 'text-')}`}>
                    {passwordStrength.label}
                </p>
                {showError('password', !password) && <p className="text-red-500 text-sm mt-1">Password is required.</p>}
            </div>

            {/* Confirm Password */}
            <div>
                <p>Confirm Password</p>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={() => handleBlur('confirmPassword')}
                    required
                    placeholder="Confirm Password"
                    className={`bg-zinc-800 p-2 rounded border w-full mt-2 text-white placeholder-zinc-400 
            ${showError('confirmPassword', !confirmPassword || !isPasswordMatch) ? 'border-red-500' : 'border-zinc-700'}
            focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
                {showError('confirmPassword', !confirmPassword) && <p className="text-red-500 text-sm mt-1">Confirmation required.</p>}
                {showError('confirmPassword', !!confirmPassword && !isPasswordMatch) && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
                )}
            </div>

            {/* Terms */}
            <div className='border-t-2 border-white pt-4'>
                <div className="flex items-center gap-3 mt-2">
                    <input
                        type="checkbox"
                        id="newsLetter"
                        className="accent-green-500"
                    />
                    <label htmlFor="newsLetter" className="font-bold">
                        Send me news and updates
                    </label>
                </div>
                <div className="flex items-center gap-3 mt-2">
                    <input
                        type="checkbox"
                        id="term_privacy"
                        required
                        className="accent-green-500"
                    />
                    <label htmlFor="term_privacy" className="font-bold">
                        I agree to the <Link href="/" className="text-blue-400">Terms of Use</Link> and <Link href="/" className="text-blue-400">Privacy Policy</Link>
                    </label>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="bg-green-700 hover:bg-green-600 transition rounded p-2 text-white font-semibold"
            >
                Create my Account
            </button>
        </form>
    )
}
