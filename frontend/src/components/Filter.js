export default function Filter({
  filterLang,
  setFilterLang,
  languages,
  filterTag,
  setFilterTag,
  tags,
  search,
  setSearch,
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by title, description, code..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded flex-1 min-w-[200px]"
      />

      {/* Language filter */}
      <select
        value={filterLang}
        onChange={(e) => setFilterLang(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All languages</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      {/* Tag filter */}
      <select
        value={filterTag}
        onChange={(e) => setFilterTag(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}


