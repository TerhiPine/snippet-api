// Lisää tiedoston alkuun
import React, { useState } from "react";
import UpdateSnippetForm from "./UpdateSnippetForm"; // polku riippuu kansiorakenteesta


export default function SnippetItem({ snippet, onDelete, onUpdate, showMessage }) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="p-4 bg-white shadow rounded">
      {editing ? (
        <UpdateSnippetForm
          snippet={snippet}
          onUpdate={onUpdate}
          onClose={() => setEditing(false)}
          showMessage={showMessage} // välitetään Update-komponentille
        />
      ) : (
        <>
          <h2 className="font-bold text-lg">{snippet.title}</h2>
          <p className="text-sm text-gray-500">{snippet.language}</p>
          <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto break-words whitespace-pre-wrap">
            {snippet.code}
          </pre>
          <p className="mt-1">{snippet.description}</p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => {
                onDelete(snippet._id);
                showMessage("Snippet deleted successfully!"); // poistoilmoitus
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

