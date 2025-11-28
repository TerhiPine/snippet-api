export default function Filter({ filterLang, setFilterLang, languages }) {
  return (
    <div className="mb-4">
      <label className="mr-2 font-medium" htmlFor="languageFilter">
        Filter by language:
      </label>
      <select
        id="languageFilter"
        value={filterLang}
        onChange={(e) => setFilterLang(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All</option>
        {languages.map((lang) => (
          <option key={lang} value={lang.toLowerCase()}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
