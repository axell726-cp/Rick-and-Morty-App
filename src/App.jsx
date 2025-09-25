// App.jsx
import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [search, setSearch] = useState("");

  const fetchCharacters = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      if (!response.ok) throw new Error("Error al cargar personajes");
      const data = await response.json();
      setCharacters(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const handleDelete = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  };

  const filteredCharacters = characters.filter(
    (c) =>
      (!filterSpecies || c.species === filterSpecies) &&
      (!filterStatus || c.status === filterStatus) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-900">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
        Rick and Morty App
      </h1>

      {/* Controles: recargar, búsqueda, filtros */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full max-w-4xl">
        <button
          onClick={() => fetchCharacters(page)}
          className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white py-2 px-6 rounded-lg font-semibold shadow transition"
        >
          Recargar
        </button>

        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-300 text-gray-800 w-full sm:w-64 shadow"
        />

        <select
          value={filterSpecies}
          onChange={(e) => setFilterSpecies(e.target.value)}
          className="p-2 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-300 text-gray-800 shadow"
        >
          <option value="">Todas las especies</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-300 text-gray-800 shadow"
        >
          <option value="">Todos los estados</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 py-2 px-5 rounded-lg font-semibold shadow transition disabled:opacity-50"
          disabled={page === 1}
        >
          Anterior
        </button>
        <span className="text-lg font-bold py-2 px-4 bg-white bg-opacity-70 rounded shadow">
          Página {page}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 py-2 px-5 rounded-lg font-semibold shadow transition"
        >
          Siguiente
        </button>
      </div>

      {/* Mensajes de estado */}
      {loading && <p className="text-center text-lg mb-6 text-blue-700 font-semibold">Cargando...</p>}
      {error && <p className="text-red-500 text-center mb-6 font-semibold">{error}</p>}

      {/* Grilla de personajes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
