const mongoose = require('mongoose');
require('dotenv').config();

// 1. Yhdistä tietokantaan
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('DB Connection Error:', err));

// 2. Luo schema ja malli (sama kuin server.js)
const snippetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, required: true, lowercase: true },
  code: { type: String, required: true },
  description: String,
  tags: [String],
  created_at: { type: Date, default: Date.now }
});

const Snippet = mongoose.model('Snippet', snippetSchema);

// 3. Luo uusi snippet ja tallenna tietokantaan
async function addSnippet() {
  const newSnippet = new Snippet({
    title: "Hello World",
    language: "js",
    code: "console.log('Hello World');",
    description: "Simple JS hello world snippet",
    tags: ["js", "beginner"]
  });

  try {
    const saved = await newSnippet.save();
    console.log("Snippet saved:", saved);
  } catch (err) {
    console.error("Error saving snippet:", err.message);
  } finally {
    mongoose.connection.close(); // Sulje yhteys kun valmis
  }
}

addSnippet();
