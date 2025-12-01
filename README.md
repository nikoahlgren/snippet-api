# snippet-api

Snippet API

A simple REST API for storing, retrieving, and managing code snippets.
Built with Node.js, Express, and MongoDB (Mongoose).

Supports code snippets like:

{
  "title": "Hello World",
  "language": "python",
  "code": "print('Hello World')"
}

Installation

Clone the repository and install dependencies:

npm install

Environment Setup

Create a .env file in the project root:

MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/snippets
PORT=3000


Important:
Make sure <cluster> matches your MongoDB Atlas cluster name.
Example:

cluster0.x7p9n


If the connection string is wrong, you will see:

DB Connection Error: ENOTFOUND _mongodb._tcp.cluster.mongodb.net

Running the Server
node server.js


Expected output:

Server running on port 3000
MongoDB connected

Testing the API

Different shells require different quoting rules.
Below are correct commands for:

Windows PowerShell

Windows CMD

macOS / Linux

1️⃣ Create a Snippet (POST)
Windows PowerShell
curl -X POST http://localhost:3000/api/snippets `
  -H "Content-Type: application/json" `
  -d "{\"title\": \"Hello World\", \"language\": \"python\", \"code\": \"print('Hello World')\"}"

Windows CMD
curl -X POST http://localhost:3000/api/snippets -H "Content-Type: application/json" -d "{\"title\":\"Hello World\",\"language\":\"python\",\"code\":\"print('Hello World')\"}"

macOS / Linux
curl -X POST http://localhost:3000/api/snippets \
  -H "Content-Type: application/json" \
  -d '{"title": "Hello World", "language": "python", "code": "print(\"Hello World\")"}'

2️⃣ Get All Snippets (GET)
All Platforms
curl "http://localhost:3000/api/snippets"


Filter by language:

curl "http://localhost:3000/api/snippets?lang=javascript"

3️⃣ Get Snippet by ID
curl http://localhost:3000/api/snippets/<id>

4️⃣ Delete Snippet
curl -X DELETE http://localhost:3000/api/snippets/<id>

API Documentation
POST /api/snippets

Create a new code snippet.

Request Body
{
  "title": "Hello World",
  "language": "python",
  "code": "print('Hello World')"
}

GET /api/snippets

Retrieve all code snippets.

Optional Query Parameters
Parameter	Example	Description
lang	?lang=javascript	Filter by programming language
GET /api/snippets/:id

Retrieve a snippet by its MongoDB _id.

DELETE /api/snippets/:id

Delete a snippet by its _id.

🗂 Project Structure
snippet-api/
├── server.js
├── models/
│   └── Snippet.js
├── routes/
│   └── snippetRoutes.js
├── .env
├── package.json
└── README.md

Troubleshooting
curl hangs or CMD freezes

This means MongoDB is not connected.
Check your .env:

MONGO_URI=mongodb+srv://username:password@cluster0.x7p9n.mongodb.net/snippets


Restart:

node server.js
PowerShell JSON errors

If you see:

Unexpected token '''


Use properly escaped JSON:

"{\"title\": \"Test\"}"
