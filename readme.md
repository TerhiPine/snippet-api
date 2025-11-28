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

## Running on Windows
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

## Running on macOS / Linux
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

## Testing Code

PUT
![put](https://github.com/user-attachments/assets/21a24857-2c7d-4746-bfcd-2737d28f6dac)

GET by ID
![getbyid](https://github.com/user-attachments/assets/9bb49d7a-b8f1-40ce-b9bf-2cb1a8150ab6)

DELETE by ID
![delete](https://github.com/user-attachments/assets/313ce52a-399b-4a62-b750-b5e7c2567391)

Curl
![curl](https://github.com/user-attachments/assets/c5a9c18b-9251-4391-854a-27bb30c285c9)
