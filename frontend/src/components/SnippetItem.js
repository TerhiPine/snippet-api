import { useState } from "react";
import { deleteSnippet } from "../services/api";
import UpdateSnippetForm from "./UpdateSnippetForm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SnippetItem({ snippet, onDelete, onUpdate, showMessage }) {
  const [showCode, setShowCode] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDelete = async () => {
    await deleteSnippet(snippet._id);
    showMessage("Snippet deleted successfully!");
    onDelete(snippet._id);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Näytä "Copied!" 1.5s
    } catch (err) {
      showMessage("Failed to copy code");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold">{snippet.title}</h3>
          <p className="text-sm text-gray-600">Language: {snippet.language}</p>
          {snippet.description && <p className="mt-1">{snippet.description}</p>}
        </div>
        <div className="flex gap-2">
          <button
            className="text-blue-500 hover:underline text-sm"
            onClick={() => setShowUpdateForm(!showUpdateForm)}
          >
            Edit
          </button>
          <button
            className="text-red-500 hover:underline text-sm"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Tags */}
      {snippet.tags && snippet.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {snippet.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Show/hide code + copy */}
      <div className="mt-2 flex items-center gap-2">
        <button
          className="text-indigo-500 hover:underline text-sm"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
        {showCode && (
            <button
              className="text-green-500 hover:underline text-sm"
              onClick={handleCopy}
            >
            {copied ? "Copied!" : "Copy"}
            </button>
        )}
      </div>

      {showCode && (
        <SyntaxHighlighter
          language={snippet.language}
          style={materialLight}
          className="mt-2 rounded overflow-x-auto"
        >
          {snippet.code}
        </SyntaxHighlighter>

      )}

      {/* Update modal/form */}
      {showUpdateForm && (
        <UpdateSnippetForm
          snippet={snippet}
          onClose={() => setShowUpdateForm(false)}
          onUpdate={onUpdate}
          showMessage={showMessage}
        />
      )}
    </div>
  );
}


