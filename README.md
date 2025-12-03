# Snippet API (Project 2)
Live Deployment

Live: https://snippet-api-eghr.onrender.com

## Running Locally
Prerequisites

You must have Node.js (version 18 or later) installed.

# Setup Instructions

Install dependencies defined in package.json:

npm install


Start the server – opens on http://localhost:3000/ by default (or the PORT from .env):

npm start


Ensure your .env is configured with:

MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/snippets
PORT=3000

## API Endpoints
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

## Technology Stack

- Node.js

- Express

- MongoDB (via Mongoose)

- JSON for API responses

## Project Reflection

- This project significantly deepened my understanding of backend development, particularly in building and deploying RESTful APIs using Node.js, Express, and MongoDB Atlas. Before starting, I had only a basic grasp of how servers handle requests, but working through each endpoint step-by-step helped me understand routing, middleware, and how data flows through an Express application. I also became more comfortable structuring a project so that routes, models, and configuration files are clearly separated and easier to maintain.

- A major learning experience was working with MongoDB Atlas and environment variables. Setting up a cloud-hosted database required careful handling of connection strings and taught me why environment configuration must remain secure, especially when deploying to platforms like Render. Understanding how .env files interact with the runtime environment helped me build better habits around security and secrets management.

- Another challenge involved testing API endpoints on different operating systems. I learned that Windows PowerShell, CMD, and macOS/Linux terminals each handle quoting and JSON formatting differently, which often caused subtle bugs during testing. Using tools like Postman helped standardize my workflow and made debugging easier.

## Video & timestamps
video link: https://video.laurea.fi/media/t/0_3v4v6w0u

00:00 - 02:10 Visual code runthrough
02:10 - 02:57 Github repository
02:58 - 05:20 Render.com and MongoDB showcase and troubleshoot
05:20 - 05:45 API functionality test

