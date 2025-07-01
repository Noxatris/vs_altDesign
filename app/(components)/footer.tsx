import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900/80 backdrop-blur-md px-6 py-12 rounded-2xl w-screen mx-auto text-white shadow-xl border border-zinc-700 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center space-y-4">
          <p className="text-lg text-zinc-200">
            © 2023 Vintage Story. All rights reserved.
          </p>
          <p className="text-sm text-zinc-400">Privacy Policy | Terms of Service</p>
        </div>
        <div className="text-center">
          <p className="text-zinc-300 mb-3 italic">Follow us on</p>
          <div className="flex justify-center gap-6">
            <Link href="/" className="hover:text-green-400 transition">Twitter</Link>
            <Link href="/" className="hover:text-green-400 transition">Discord</Link>
            <Link href="/" className="hover:text-green-400 transition">Reddit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}