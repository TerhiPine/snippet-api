import { useEffect, useState } from "react";
import { getAllSnippets, deleteSnippet } from "../services/api";
import SnippetItem from "./SnippetItem";
import Filter from "./Filter";

export default function SnippetList({ refreshFlag, showMessage }) {
  const [snippets, setSnippets] = useState([]);
  const [filterLang, setFilterLang] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Haetaan snippetit aina kun refreshFlag muuttuu
  useEffect(() => {
    fetchSnippets();
  }, [refreshFlag]);

  const fetchSnippets = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getAllSnippets();
      setSnippets(data);
    } catch (err) {
      setError("Failed to fetch snippets");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSnippet(id);
      showMessage("Snippet deleted successfully!");
      fetchSnippets();
    } catch (err) {
      setError("Failed to delete snippet");
    }
  };

  // Luo uniikit kielet ja tagit suodattimia varten
  const languages = [...new Set(snippets.map((s) => s.language?.toLowerCase()))];
  const tags = [...new Set(snippets.flatMap((s) => s.tags || []))];

  // Suodatetaan snippetit
  const filteredSnippets = snippets.filter((s) => {
    const langMatch = filterLang
      ? s.language?.toLowerCase() === filterLang.toLowerCase()
      : true;

    const tagMatch = filterTag ? s.tags?.includes(filterTag) : true;

    const searchLower = search.toLowerCase();
    const searchMatch =
      s.title?.toLowerCase().includes(searchLower) ||
      s.description?.toLowerCase().includes(searchLower) ||
      s.language?.toLowerCase().includes(searchLower) ||
      s.code?.toLowerCase().includes(searchLower);

    return langMatch && tagMatch && searchMatch;
  });

  return (
    <div>
      {/* Filter-komponentti */}
      <Filter
        filterLang={filterLang}
        setFilterLang={setFilterLang}
        languages={languages}
        filterTag={filterTag}
        setFilterTag={setFilterTag}
        tags={tags}
        search={search}
        setSearch={setSearch}
      />

      {/* Loading ja error */}
      {loading && <p className="text-blue-600 font-medium mb-2">Loading snippets...</p>}
      {error && <p className="text-red-600 font-medium mb-2">{error}</p>}

      {/* Snippetit gridissä */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSnippets.map((s) => (
          <SnippetItem
            key={s._id}
            snippet={s}
            onDelete={handleDelete}
            onUpdate={fetchSnippets}
            showMessage={showMessage}
          />
        ))}
      </div>
    </div>
  );
}




