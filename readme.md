# Code Snippet API

A simple REST API for storing and organizing reusable code snippets.
Built with Node.js, Express, and MongoDB (Mongoose).

This tool allows developers to save, tag, update, delete and filter code snippets by language.
Perfect for creating a personal knowledge base of reusable code.

tore code snippets (JS, Python, etc.)

## CRUD operations:

- Create (POST)

- Read all and Read one by ID (GET)
  
- Update (PUT)
- Delete (DELETE)

Filter by language
Example:

`GET /api/snippets?lang=javascript`

Limit results
Example:

`GET /api/snippets?limit=5`

## Tech Stack

Node.js	Backend runtime
Express	Web server
MongoDB Atlas	Cloud Database
Mongoose	Data modeling
dotenv	Environment variables
cors	CORS handling

## Installation Instructions
1. Clone the Repository
`git clone <your-repository-url>`
`cd snippet-api`

2. Install Dependencies
`npm install`

3. Create .env File

Create a file named .env in the project root:

`MONGODB_URI=your_mongo_connection_string`

4. Start the Server
`node server.js`


Server starts at:

`http://localhost:3000`


You should see:

Connected to MongoDB
Server running on port 3000

### Running on Windows
Test API using PowerShell (Invoke-RestMethod)
GET all snippets
`Invoke-RestMethod "http://localhost:3000/api/snippets"`

GET one snippet
`Invoke-RestMethod "http://localhost:3000/api/snippets/<ID>"`

POST – Add snippet
`Invoke-RestMethod -Uri "http://localhost:3000/api/snippets" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"title":"Hello","language":"python","code":"print(\"Hello\")"}'`

PUT – Update snippet
`Invoke-RestMethod -Uri "http://localhost:3000/api/snippets/<ID>" `
  -Method PUT `
  -ContentType "application/json" `
  -Body '{"description":"Updated description"}'`

DELETE
`Invoke-RestMethod -Uri "http://localhost:3000/api/snippets/<ID>" -Method DELETE`

### Running on macOS / Linux
Using curl
GET all
`curl http://localhost:3000/api/snippets`

GET one
`curl http://localhost:3000/api/snippets/<ID>`

POST
`curl -X POST http://localhost:3000/api/snippets \
-H "Content-Type: application/json" \
-d '{"title":"Hello","language":"javascript","code":"console.log(\"Hello\")"}'`

PUT
`curl -X PUT http://localhost:3000/api/snippets/<ID> \
-H "Content-Type: application/json" \
-d '{"description":"Updated"}'`

DELETE
`curl -X DELETE http://localhost:3000/api/snippets/<ID>`
