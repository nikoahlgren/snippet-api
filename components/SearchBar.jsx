import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(language);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <select
        className="form-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">All Languages</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="csharp">C#</option>
        <option value="java">Java</option>
      </select>

      <button className="btn btn-primary">Filter</button>
    </form>
  );
}
