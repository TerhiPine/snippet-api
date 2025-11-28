const axios = require('axios'); // npm install axios

const BASE_URL = 'http://localhost:3000/api/snippets';

async function testCRUD() {
  try {
    // 1. CREATE snippet
    const newSnippet = {
      title: "ServerJS Test",
      language: "js",
      code: "console.log('ServerJS Test');",
      description: "Testing CRUD via server.js",
      tags: ["test", "serverjs"]
    };

    const postRes = await axios.post(BASE_URL, newSnippet);
    console.log("POST:", postRes.data.title);
    const snippetId = postRes.data._id;

    // 2. GET all snippets
    const getAll = await axios.get(BASE_URL + '?limit=5');
    console.log("\nGET all (latest 5):");
    getAll.data.forEach(s => console.log(s.title));

    // 3. GET one snippet by ID
    const getOne = await axios.get(`${BASE_URL}/${snippetId}`);
    console.log("\nGET one:", getOne.data.title);

    // 4. UPDATE snippet
    const putRes = await axios.put(`${BASE_URL}/${snippetId}`, { description: "Updated via server.js" });
    console.log("\nPUT:", putRes.data.description);

    // 5. DELETE snippet
    const deleteRes = await axios.delete(`${BASE_URL}/${snippetId}`);
    console.log("\nDELETE:", deleteRes.data.message);

  } catch (err) {
    console.error("API error:", err.response ? err.response.data : err.message);
  }
}

testCRUD();
