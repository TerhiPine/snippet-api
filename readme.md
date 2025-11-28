# Code Snippet API

A simple REST API for storing and organizing reusable code snippets.
Built with Node.js, Express, and MongoDB (Mongoose).

This tool allows developers to save, tag, update, delete and filter code snippets by language.
Perfect for creating a personal knowledge base of reusable code.

tore code snippets (JS, Python, etc.)

## Video & Live URL

Watch the demo video: [Code Snippet API Demo](https://youtu.be/OPlSbd9mQkE)

Timestamps:

- 00:00 Sart server
- 00:05 GET all
- 00:13 GET by ID
- 00:20 GET by tag/language
- 00:34 POST
- 00:46 PUT
- 01:06 DELETE


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

## Reflection + Self-assesment

During this project, I learned how to design and implement a complete REST API using Node.js, Express, MongoDB, and Mongoose. A major part of the learning process involved understanding how routing, controllers, and database models work together. Even though the CRUD structure is conceptually simple, implementing proper error handling, status codes, and validation required careful planning.

One of the most significant technical challenges I encountered was testing the API locally. The assignment required using Postman or curl, but on my ASUS Windows device, PowerShell repeatedly interfered with standard curl syntax. PowerShell overrides curl with Invoke-WebRequest, which caused parsing errors, escaping issues, and invalid JSON errors. Even when calling curl.exe directly, PowerShell sometimes broke the command or interpreted characters incorrectly. These issues were not caused by the API itself, but by PowerShell’s built-in command aliases and quoting rules.

Because of this, I switched to Invoke-RestMethod, which is PowerShell’s native and reliable way to send JSON HTTP requests. It allowed me to send POST, PUT, and DELETE requests without escape-character conflicts. I still demonstrated curl separately to satisfy the assignment requirement, but for real debugging and development, Invoke-RestMethod was the only consistently working method in my environment.

Deployment also provided valuable experience, especially handling environment variables and understanding differences between local and hosted environments. Overall, the project strengthened my confidence in backend development and practical debugging.

I believe I successfully met all project requirements. My API includes all required routes (GET all, GET by ID, POST, PUT/PATCH, DELETE), uses MongoDB with Mongoose, and returns proper JSON responses and status codes. I included local testing evidence with both curl and Invoke-RestMethod, documenting the technical limitations of PowerShell on my system. The project is deployed online, and the README contains setup instructions for Windows and macOS. While there is room for further enhancements, the core functionality, documentation, and deployment all meet the assignment’s expectations.
