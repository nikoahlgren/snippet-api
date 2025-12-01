#Snippet API (Project 2)
Live Deployment

Live:

##Running Locally
Prerequisites

You must have Node.js (version 18 or later) installed.

##Setup Instructions

Install dependencies defined in package.json:

npm install


Start the server – opens on http://localhost:3000/ by default (or the PORT from .env):

npm start


Ensure your .env is configured with:

MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/snippets
PORT=3000

##API Endpoints
Snippets Collection

GET /api/snippets
Retrieves all code snippets. Optional query parameter:
?lang= (filter by programming language)

GET /api/snippets/:id
Retrieves a snippet by its MongoDB _id.

POST /api/snippets
Creates a new snippet. Requires JSON body:

{
  "title": "Hello World",
  "language": "python",
  "code": "print('Hello World')"
}


DELETE /api/snippets/:id
Deletes a snippet by its _id.

##Technology Stack

- Node.js

- Express

- MongoDB (via Mongoose)

- JSON for API responses

##Project Reflection

This project introduced me to building APIs with Node.js and Express and connecting to MongoDB Atlas.

I learned the importance of handling JSON parsing and testing endpoints via curl/PowerShell/Postman.

Working with .env and MongoDB connection strings highlighted the need for secure environment configuration.

Testing revealed differences between Windows PowerShell, CMD, and macOS/Linux when sending JSON data.

For further improvement, I could implement validation, error handling, and authentication.

Using MongoDB Atlas instead of a local JSON file taught me how to scale data storage safely.
