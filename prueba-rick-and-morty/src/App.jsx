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
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Rick and Morty App</h1>

      {/* Controles: recargar, búsqueda, filtros */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <button
          onClick={() => fetchCharacters(page)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Recargar
        </button>

        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded text-black w-full sm:w-64"
        />

        <select
          value={filterSpecies}
          onChange={(e) => setFilterSpecies(e.target.value)}
          className="p-2 rounded text-black"
        >
          <option value="">Todas las especies</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 rounded text-black"
        >
          <option value="">Todos los estados</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
        >
          Anterior
        </button>
        <span className="text-white py-2 px-4">Página {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
        >
          Siguiente
        </button>
      </div>

      {/* Mensajes de estado */}
      {loading && <p className="text-center text-lg mb-6">Cargando...</p>}
      {error && <p className="text-red-400 text-center mb-6">{error}</p>}

      {/* Grilla de personajes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
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
