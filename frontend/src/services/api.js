const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://snippet-api-1.onrender.com/api/snippets"
    : "http://localhost:3000/api/snippets";

export const getAllSnippets = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createSnippet = async (snippet) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(snippet),
  });
  return res.json();
};

export const updateSnippet = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteSnippet = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
