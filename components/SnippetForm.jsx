import { useState } from "react";

export default function SnippetForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, language, code });
    setTitle("");
    setLanguage("");
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">Add New Snippet</h4>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Snippet Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          className="form-select mb-2"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        >
          <option value="">Select Language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="csharp">C#</option>
          <option value="java">Java</option>
        </select>

        <textarea
          className="form-control mb-2"
          rows="4"
          placeholder="Enter code..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        ></textarea>

        <button className="btn btn-primary w-100">Add Snippet</button>
      </div>
    </form>
  );
}
