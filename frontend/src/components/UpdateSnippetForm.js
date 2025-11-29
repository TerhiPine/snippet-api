import { useState } from "react";
import { updateSnippet } from "../services/api";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UpdateSnippetForm({ snippet, onUpdate, onClose, showMessage }) {
  const [title, setTitle] = useState(snippet.title);
  const [language, setLanguage] = useState(snippet.language);
  const [code, setCode] = useState(snippet.code);
  const [description, setDescription] = useState(snippet.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateSnippet(snippet._id, { title, language, code, description });
    onUpdate();
    onClose();
    showMessage("Snippet updated successfully!");
  };

  return (
    <div className="p-4 bg-gray-50 rounded shadow space-y-4">
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Language</label>
        <input
          className="w-full border p-2 rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Code</label>
        <textarea
          className="w-full border p-2 rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="mt-2 max-h-64 overflow-auto">
          <SyntaxHighlighter
            language={language || "text"}
            style={materialLight}
            wrapLines={true}
            lineProps={{ style: { wordBreak: 'break-word' } }}
            className="rounded"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Description</label>
        <input
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex space-x-2">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          onClick={handleSubmit}
        >
          Update
        </button>
        <button
          className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

