"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="flex flex-col items-center bg-zinc-900/80 px-6 py-1 rounded-t-2xl w-screen mx-auto text-white shadow-xl border border-zinc-700 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-6 mb-2 mt-4">
          <Link href="/privacy">Privacy Policy</Link>
          <button
            onClick={() => setShowModal(true)}
            className="hover:cursor-pointer"
          >
            Contact Us
          </button>
          <Link href="/jobs.html">Jobs</Link>
          <Link href="https://status.vintagestory.at">Status</Link>
        </div>
        <div className="flex flex-col md:flex-row md:divide-x divide-white/80 justify-between items-center mb-2">
          <p className="px-2">Copyright © 2016-2099 Anego Studios SIA</p>
          <Link href="/impressum.html" className="px-2">Impressum</Link>
          <Link href="/refund.html" className="px-2">Refund policy</Link>
          <Link href="/tos.html" className="px-2">Terms of Service</Link>
        </div>
        <Link href="https://invisioncommunity.com/">Powered by Invision Community</Link>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-start justify-start xl:justify-end px-4 pt-12">
          <div className="absolute top-10 bg-zinc-800 border border-green-900 rounded-xl p-4 shadow-xl z-50 flex flex-col items-center w-[90vw] max-w-[450px] sm:w-[25vw]">
            <div className="w-full flex justify-between items-center mb-4 border-b-2 border-white pb-4 px-2">
              <h2 className="font-[Almendra] text-yellow-400 text-[1.3em]">Contact Us</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-red-400 hover:text-red-600"
              >
                <X />
              </button>
            </div>

            <form className="w-full flex flex-col gap-3 px-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-zinc-700 text-white border border-zinc-500 rounded p-2 w-full"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="bg-zinc-700 text-white border border-zinc-500 rounded p-2 w-full"
              />
              <button
                type="submit"
                className="bg-green-700 text-white py-2 rounded hover:bg-green-500 transition"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
