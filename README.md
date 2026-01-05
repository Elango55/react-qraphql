Student Management App

A simple Student Management web application built with React, Apollo Client, and GraphQL, featuring CRUD operations (Create, Read, Update, Delete) with search and pagination, using JSON Server as a mock backend.

Start our app:
npm install
npm run install:all
npm start

Ports:
JSON Server: http://localhost:5000/students

GraphQL Server: http://localhost:4000/graphql

React frontend: http://localhost:5173/
Features

1. List students with pagination
2. Add new students
3. Edit existing students
4. Delete students
5. Search students by name
6. Newly added students appear first
7. Responsive and user-friendly UI using Styled Components

Technologies Used

-> Frontend: React, TypeScript, Apollo Client, Styled Components

-> Backend: Apollo GraphQL Server + JSON Server (mock data source)

-> Others: Node.js, npm/yarn

Project Structure:-

student-management-app/
│
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # React components (StudentList, etc.)
│   │   ├── graphql/       # GraphQL queries and mutations
│   │   ├── styles/        # Styled Components for UI
│   │   └── App.tsx
│   └── package.json
│
├── server/                # GraphQL server
│   ├── datasources/       # Data fetching logic (fetches from JSON Server)
│   ├── resolvers/         # GraphQL resolvers
│   ├── schema.js          # GraphQL type definitions
│   └── server.js
│
├── mocks/                 # JSON Server mock backend
│   └── db.json
│
├── README.md
└── package.json

Usage

1. Open the app: http://localhost:5173/

2. Add Student: Fill the form → Click Add Student

3. Edit Student: Click Edit → Update → Click Update Student

4. Delete Student: Click Delete

5. Search Student: Enter name → Click Search

6. Clear Search: Delete input → Click Search → All students appear

7. Pagination works with Prev / Next buttons

Author

Elangovan E
