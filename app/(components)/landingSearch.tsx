export default function LandingSearch() {
    return (
        <div className="backdrop-blur-md bg-zinc-900/60 border border-green-900 rounded-2xl shadow-xl px-6 py-4 flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl mx-auto">
            <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 bg-zinc-800/70 text-white placeholder:text-zinc-400 font-[EBGaramond] text-lg tracking-wide rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 transition"
            />

            <select
                className="px-4 py-2 bg-zinc-800/70 text-white font-[EBGaramond] text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
            >
                <option value="everywhere">Everywhere</option>
                <option value="statusUpdates">Status Updates</option>
                <option value="topics">Topics</option>
                <option value="blogEntries">Blog Entries</option>
                <option value="pages">Pages</option>
                <option value="records">Records</option>
                <option value="products">Products</option>
                <option value="members">Members</option>
            </select>

            <button
                className="px-6 py-2 bg-green-800 hover:bg-green-700 text-white font-[Amendra] text-xl rounded-md transition tracking-wider shadow-md"
            >
                Search
            </button>
        </div>
    )
}