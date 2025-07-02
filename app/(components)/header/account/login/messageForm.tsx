export default function MessageForm({ setShowModal }: { setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 text-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-green-800 max-h-[85vh] overflow-y-auto custom-scrollbar animate-fade-in"
            >
                <h3 className="text-yellow-400 text-2xl font-[Almendra] mb-6 text-center">
                    Compose New Message
                </h3>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-white mb-2">To</label>
                        <input
                            type="text"
                            placeholder="Recipient"
                            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-green-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-white-300 mb-2">Subject</label>
                        <input
                            type="text"
                            placeholder="Subject line"
                            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-green-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-white-300 mb-2">Message</label>
                        <textarea
                            rows={6}
                            placeholder="Type your message here..."
                            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-green-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-600 text-white hover:text-yellow-300 px-5 py-2 rounded-xl font-semibold transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
