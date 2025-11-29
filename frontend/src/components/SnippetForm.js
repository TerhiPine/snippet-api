import { useState } from "react";
import { createSnippet } from "../services/api";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SnippetForm({ onAdd, showMessage }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagArray = tags.split(",").map((t) => t.trim()).filter(Boolean);
    
    try {
      setLoading(true);
      await createSnippet({ title, language, code, description, tags: tagArray });
      setTitle(""); setLanguage(""); setCode(""); setDescription(""); setTags("");
      showMessage("Snippet added successfully!");
      onAdd();
    } catch (err) {
      setError("Failed to add snippet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-gray-50 rounded mb-4 shadow">
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Snippet"}
      </button>

      {error && <p className="text-red-600 mt-2 font-medium">{error}</p>}

      {/* Live Preview with Syntax Highlighting */}
      {(title || language || code || description || tags) && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Live Preview:</h3>
          {title && <p><strong>Title:</strong> {title}</p>}
          {language && <p><strong>Language:</strong> {language}</p>}
          {code && (
            <div className="mt-1">
              <SyntaxHighlighter
                language={language || "text"}
                style={materialLight}
                className="rounded"
              >
                {code}
              </SyntaxHighlighter>
            </div>
          )}
          {description && <p><strong>Description:</strong> {description}</p>}
          {tags && <p><strong>Tags:</strong> {tags}</p>}
        </div>
      )}
    </form>
  );
}



