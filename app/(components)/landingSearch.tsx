export default function LandingSearch(){
    return (
        <div>
            <input type="text" placeholder="Search..." />
            <select>
                <option value="everywhere">Everywhere</option>
                <option value="statusUpdates">Status Updates</option>
                <option value="topics">Topics</option>
                <option value="blogEntries">Blog Entries</option>
                <option value="pages">Pages</option>
                <option value="records">Records</option>
                <option value="products">Products</option>
                <option value="members">Members</option>
            </select>
            <button>Search</button>
        </div>
    )
}