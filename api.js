const BASE_URL = "https://snippet-api-eghr.onrender.com/api/snippets";

export const getSnippets = async (lang = "") => {
  const url = lang ? `${BASE_URL}?lang=${lang}` : BASE_URL;
  const res = await fetch(url);
  return res.json();
};

export const getSnippetById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const createSnippet = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteSnippet = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
