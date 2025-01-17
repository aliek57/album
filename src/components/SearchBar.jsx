import { useState } from "react";

const SearchBar = ({ setQuery, setCategoria, setActivateSearch }) => {
  const [localQuery, setLocalQuery] = useState("");
  const categorias = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes",
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setQuery(localQuery);
      setActivateSearch(true);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Pesquisar fotos..."
      />
      <button
        onClick={() => {
          setQuery(localQuery);
          setActivateSearch(true);
        }}
      >
        Pesquisar
      </button>
      <select
        onChange={(e) => {
          setCategoria(e.target.value);
          setActivateSearch(true);
        }}
      >
        <option value="">Todas as categorias</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;