import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-zinc-900/80 backdrop-blur-md px-6 py-1 rounded-t-2xl w-screen mx-auto text-white shadow-xl border border-zinc-700 mt-12">
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-2 mt-4'>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Jobs</Link>
        <Link href="/">Status</Link>
      </div>
      <div className='flex flex-col md:flex-row divide-x divide-white/80 justify-between items-center mb-2'>
        <p className='px-2'>Copyright © 2016-2099 Anego Studios SIA</p>
        <Link href="/" className='px-2'>Impressum</Link>
        <Link href="/" className='px-2'>Refund policy</Link>
        <Link href="/" className='px-2'>Terms of Service</Link>
      </div>
      <Link href="/">Powered by Invision Community</Link>
    </footer>
  );
}