import Link from 'next/link';

import ContentSection from './(components)/landing/contentSection';
import StandardSection from './(components)/landing/standardSection';

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <section className="md:h-[80vh] flex flex-col items-center justify-center text-white mb-8 md:mb-0">
        <h1 className="font-[Almendra] text-[5em] text-center md:text-[10em] text-transparent bg-clip-text bg-gradient-to-r from-[#4C6B4F] via-[#5E7F57] to-[#3E5942] drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] -z-10">
          Vintage Story
        </h1>
        <p className="flex justify-center w-[90%] md:w-[65%] text-2xl font-[EBGaramond] mt-12">Vintage Story is an uncompromising wilderness survival sandbox game inspired by eldritch horror themes. Find yourself in a ruined world reclaimed by nature and permeated by unnerving temporal disturbances. Relive the advent of human civilization, or take your own path.</p>
      </section>
      <section className="bg-zinc-900/80 -z-[] md:backdrop-blur-md px-6 py-12 rounded-2xl w-[90%] max-w-6xl mx-auto text-white shadow-xl border border-zinc-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Bloc gauche */}
          <div className="md:w-1/2 text-center space-y-4">
            <p className="text-lg text-zinc-200">
              <span className="text-green-400 font-semibold">Early Access</span>. Fully playable on Windows, Mac and Linux. <br />
              Play solo or with <span className="text-yellow-300 font-medium">743 others currently online</span>.
            </p>

            <Link
              href="/store/category/1-game-account-game-servers"
              className="inline-block px-6 py-3 font-[Almendra] text-lg text-yellow-100 bg-gradient-to-br from-green-700 via-emerald-800 to-green-950 rounded-xl shadow-lg ring-2 ring-green-900 hover:ring-yellow-400 transition duration-300 overflow-hidden group"
            >
              <span className="flex items-center gap-2">
                💎 Buy now for <span className="text-yellow-300 font-bold">20 €</span> / <span className="text-green-300 font-bold">22 $</span>
              </span>
            </Link>

          </div>

          {/* Bloc droit */}
          <div className="md:w-1/2 text-center">
            <p className="text-zinc-300 mb-3 italic">Also available on</p>
            <div className="flex justify-center gap-6">
              <Link href="/">
                <img
                  src="/humblestore.webp"
                  alt="Buy on Humble Store"
                  className="h-10 hover:scale-105 transition-transform duration-200"
                />
              </Link>
              <Link href="/">
                <img
                  src="/itchio.webp"
                  alt="Buy on Itch.io"
                  className="h-10 hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <StandardSection />
      <ContentSection />
    </div>
  );
}
