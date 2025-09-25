function CharacterCard({ character, onDelete }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs mx-auto">
            <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-bold text-gray-800">{character.name}</h2>
                    <p className="text-sm text-gray-600">{character.species}</p>
                    <p className="text-sm text-gray-600">{character.status}</p>
                </div>
                <button
                    onClick={() => onDelete(character.id)}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default CharacterCard;


