import Link from 'next/link';

export default function StandardSection() {
    return (
        <section className="px-6 py-16 max-w-5xl mx-auto">
            <h2 className="font-[UncialAntiqua] text-4xl font-bold font-title text-yellow-100 mb-10 text-center">
                Held to high standards
            </h2>

            <div className="space-y-12 text-zinc-100 font-body text-lg leading-relaxed">

                <div>
                    <h3 className="flex font-[Almendra] text-2xl font-semibold font-title text-yellow-200 mb-2">
                        <img src="/icon/pageEthical.webp" alt="" className='mr-4'/>Fair and Independent
                    </h3>
                    <p className='font-[EBGaramond] text-[1.3em]'>
                        <strong>No marketplace.</strong> <strong>No loot boxes.</strong> <strong>No microtransactions.</strong> <strong>No Season pass.</strong>{' '}
                        <strong>No paid DLC.</strong> <strong>No hidden fees.</strong> <strong>No pay2win.</strong> <strong>No ads.</strong>{' '}
                        <strong>No user data monetization.</strong> <strong>No software patents.</strong> <strong>No shareholders.</strong>{' '}
                        <strong>No publisher.</strong> <strong>No NFTs.</strong> <strong>No BlockChain.</strong> <strong>No 3rd party interests.</strong>{' '}
                        <strong>No Games-as-a-Service.</strong> <strong>No empty promises.</strong>
                    </p>
                </div>

                <div>
                    <h3 className="flex font-[Almendra] text-2xl font-semibold font-title text-yellow-200 mb-2">
                        <img src="/icon/pageHandmade.png" alt="" className='mr-4'/>Handmade
                    </h3>
                    <p className='font-[EBGaramond] text-[1.3em]'>
                        Vintage Story is powered by our own cross-platform game engine. This allows us to tailor the engine exactly to our needs while
                        still keeping <Link href="/sysrequirements" className='border-b-1 border-green-700 text-green-700 font-bold'>hardware requirements</Link> low. <strong>We are 100% Indie.</strong>
                    </p>
                </div>

                <div>
                    <h3 className="flex font-[Almendra] text-2xl font-semibold font-title text-yellow-200 mb-2">
                        <img src="/icon/pageSocial.webp" alt="" className='mr-4'/>Social
                    </h3>
                    <p className='font-[EBGaramond] text-[1.3em]'>
                        We pay careful attention to foster a friendly and supportive community. Come visit us on the official <Link href="/forums" className='border-b-1 border-green-700 text-green-700 font-bold'>forum</Link>, <Link href="https://discord.com/invite/CkJjdrB" className='border-b-1 border-green-700 text-green-700 font-bold'>Discord chat server</Link>,
                        <Link href="https://wiki.vintagestory.at/index.php?title=Main_Page" className='border-b-1 border-green-700 text-green-700 font-bold'>wiki</Link> and <Link href="https://mods.vintagestory.at/" className='border-b-1 border-green-700 text-green-700 font-bold'>mod database</Link>. <strong>Multiplayer anti-grief mechanics out of the box.</strong> You can get in direct contact with the
                        developers of the game.
                    </p>
                </div>

                <div>
                    <h3 className="flex font-[Almendra] text-2xl font-semibold font-title text-yellow-200 mb-2">
                        <img src="/icon/pageOpen.webp" alt="" className='mr-4'/>Open
                    </h3>
                    <p className='font-[EBGaramond] text-[1.3em]'>
                        You can customize your game experience in infinite ways. Built from the ground up with modding in mind – we use our own mod API to
                        add new game content. Half of the game is under a <Link href="https://github.com/anegostudios?utf8=%E2%9C%93&q=&type=source&language=" className='border-b-1 border-green-700 text-green-700 font-bold'>readable source license</Link>. We built our own <Link href="https://github.com/anegostudios/vsmoddb" className='border-b-1 border-green-700 text-green-700 font-bold'>mod database</Link>, <Link href="https://github.com/anegostudios/vsmodelcreator" className='border-b-1 border-green-700 text-green-700 font-bold'>modelling and animation
                            tools</Link> and made them open source.
                    </p>
                </div>
            </div>
        </section>
    )
}