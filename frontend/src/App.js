import { useState } from "react";
import SnippetForm from "./components/SnippetForm";
import SnippetList from "./components/SnippetList";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Funktio ilmoitusten näyttämiseen
  const showMessage = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 3000); // katoaa 3 sekunnissa
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Code Snippet Library</h1>

      {/* Näytetään ilmoitus onnistuneesta toiminnosta */}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
          {successMessage}
        </div>
      )}

      {/* Lomake uuden snippetin lisäämiseen */}
      <SnippetForm
        onAdd={() => setRefreshFlag(!refreshFlag)}
        showMessage={showMessage} // välitetään prop
      />

      {/* Lista kaikista snippeteistä */}
      <SnippetList
        refreshFlag={refreshFlag}
        showMessage={showMessage} // välitetään prop
      />
    </div>
  );
}

export default App;


