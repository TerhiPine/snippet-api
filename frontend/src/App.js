import { useState } from "react";
import SnippetForm from "./components/SnippetForm";
import SnippetList from "./components/SnippetList";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const showMessage = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Code Snippet Library</h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}

      <SnippetForm
        onAdd={() => setRefreshFlag(!refreshFlag)}
        showMessage={showMessage}
      />

      <SnippetList
        refreshFlag={refreshFlag}
        showMessage={showMessage}
      />
    </div>
  );
}

export default App;



