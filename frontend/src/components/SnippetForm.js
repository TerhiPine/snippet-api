import { useState } from "react";
import { createSnippet } from "../services/api";

export default function SnippetForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSnippet({ title, language, code, description, tags: [] });
    setTitle(""); setLanguage(""); setCode(""); setDescription("");
    setSuccessMessage("Snippet added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    onAdd();
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-gray-50 rounded mb-4">
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
      <button className="bg-blue-500 text-white px-3 py-1 rounded">Add Snippet</button>

      {successMessage && (
        <p className="text-green-600 mt-2 font-medium">{successMessage}</p>
      )}
    </form>
  );
}