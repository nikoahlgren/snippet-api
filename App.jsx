import { useEffect, useState } from "react";
import { getSnippets, createSnippet, deleteSnippet } from "./api";

import SnippetList from "./components/SnippetList";
import SnippetForm from "./components/SnippetForm";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle";
import { DarkModeProvider } from "./DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <MainApp />
    </DarkModeProvider>
  );
}

function MainApp() {
  const [snippets, setSnippets] = useState([]);

  const loadData = async (lang = "") => {
    const data = await getSnippets(lang);
    setSnippets(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async (snippet) => {
    await createSnippet(snippet);
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteSnippet(id);
    loadData();
  };

  return (
    <div className="container py-4">
      <DarkModeToggle />

      <h1 className="mb-4 text-center">Snippet Manager</h1>

      <SearchBar onSearch={loadData} />
      <SnippetForm onAdd={handleAdd} />
      <SnippetList snippets={snippets} onDelete={handleDelete} />
    </div>
  );
}
