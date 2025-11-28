import { useEffect, useState } from "react";
import { getAllSnippets, deleteSnippet } from "../services/api";
import SnippetItem from "./SnippetItem";
import Filter from "./Filter";

export default function SnippetList({ refreshFlag, showMessage }) {
  const [snippets, setSnippets] = useState([]);
  const [filterLang, setFilterLang] = useState("");

  // Hae snippetit aina, kun refreshFlag muuttuu
  useEffect(() => {
    fetchSnippets();
  }, [refreshFlag]);

  const fetchSnippets = async () => {
    const data = await getAllSnippets();
    setSnippets(data);
  };

  const handleDelete = async (id) => {
    await deleteSnippet(id);
    showMessage("Snippet deleted successfully!");
    fetchSnippets();
  };

  // Luodaan dynaaminen lista kaikista kielistä
  const allLanguages = [...new Set(snippets.map(s => s.language.toLowerCase()))];

  // Suodatetut snippetit filterLangin perusteella
  const filteredSnippets = snippets.filter((s) =>
    filterLang ? s.language.toLowerCase() === filterLang.toLowerCase() : true
  );

  return (
    <div>
      {/* Filter-komponentti */}
      <Filter filterLang={filterLang} setFilterLang={setFilterLang} languages={allLanguages} />

      {/* Lista */}
      <div className="space-y-4">
        {filteredSnippets.map((s) => (
          <SnippetItem
            key={s._id}
            snippet={s}
            onDelete={handleDelete}
            onUpdate={fetchSnippets}
            showMessage={showMessage} // App.js:n funktio
          />
        ))}
      </div>
    </div>
  );
}


