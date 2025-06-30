export default function LandingSearch() {
    return (
        <div className="flex items-center gap-2 bg-zinc-800 p-2 rounded-xl shadow-inner max-w-xl mx-auto">
            <select className="bg-zinc-700 text-green-300 px-3 py-2 rounded-l-lg text-sm outline-none focus:ring-2 focus:ring-green-700">
                <option value="everywhere">Everywhere</option>
                <option value="statusUpdates">Status Updates</option>
                <option value="topics">Topics</option>
                <option value="blogEntries">Blog Entries</option>
                <option value="pages">Pages</option>
                <option value="records">Records</option>
                <option value="products">Products</option>
                <option value="members">Members</option>
            </select>

            <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 bg-zinc-700 text-green-100 placeholder-green-400 rounded-r-lg text-sm outline-none focus:ring-2 focus:ring-green-700"
            />

            <button className="ml-2 px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md text-sm shadow-md transition duration-200">
                Search
            </button>
        </div>

    )
}