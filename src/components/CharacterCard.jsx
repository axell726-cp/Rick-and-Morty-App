// CharacterCard.jsx
function CharacterCard({ character, onDelete }) {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-xs mx-auto border border-blue-100">
            <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover object-top rounded-t-2xl border-b border-blue-100"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-blue-900 mb-1">{character.name}</h2>
                    <p className="text-sm text-purple-700 font-medium">{character.species}</p>
                    <p className={`text-sm mt-1 font-semibold ${character.status === "Alive"
                        ? "text-green-600"
                        : character.status === "Dead"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}>
                        {character.status}
                    </p>
                </div>
                <button
                    onClick={() => onDelete(character.id)}
                    className="mt-5 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold shadow transition"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default CharacterCard;



