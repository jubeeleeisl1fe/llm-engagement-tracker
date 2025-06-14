# LLM Engagement Tracker

This project is a simple full-stack web app that tracks user engagement and summarizes it using a language model. It simulates an Azure-like environment but is built to run entirely on a local setup using SQLite, Prisma, and the OpenAI API.

## Features

- Backend built with Express and Prisma
- Stores engagement data in a local SQLite database
- Uses OpenAI GPT-3.5 to summarize user activity
- Frontend built with React that displays the data and the summary
- GitHub Actions is used to run CI checks like type-checking
- Can be extended to work with real databases or deployed to cloud platforms

## Technologies Used

Frontend:
- React
- TypeScript

Backend:
- Node.js
- Express
- Prisma ORM
- SQLite

AI:
- OpenAI API (GPT-3.5)

CI/CD:
- GitHub Actions

## How to Run the Project

1. Clone this repository:
   git clone https://github.com/jubeeleeisl1fe/llm-engagement-tracker.git
   cd llm-engagement-tracker

2. Install backend dependencies:
   npm install

3. Create a .env file and add your OpenAI API key:
   OPENAI_API_KEY=your-key-here

4. Generate the Prisma client and set up the database:
   npx prisma generate
   npx prisma migrate dev --name init
   npm run seed

5. Install frontend dependencies:
   cd client
   npm install
   cd ..

6. Run the app:
   npm run dev

By default:
- The backend will run at http://localhost:3001
- The frontend will run at http://localhost:3000

## Folder Structure

- /client – React frontend
- /prisma – Prisma schema and seed script
- server.js – Express backend
- .env – Stores the OpenAI API key
- .github/workflows – Contains the GitHub Actions workflow

## Notes

The app uses a mock engagement dataset and generates summaries using the OpenAI API. It is built for local development and testing, and does not require cloud resources. This setup is meant to demonstrate the architecture and core functionality of an Azure-aligned project in a simplified form.

## Author

Pranav Adithya B
https://github.com/jubeeleeisl1fe
