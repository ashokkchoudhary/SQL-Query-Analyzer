# SQL Query Analyzer

## About the Project

SQL Query Analyzer is a full-stack web application that analyzes SQL queries and identifies common performance issues. It provides optimization suggestions and calculates an optimization score based on the detected issues. The application also stores previous analyses so users can review them later.

This project was developed using React for the frontend and Node.js, Express.js, and MongoDB for the backend.

---

## Features

- Analyze SQL queries
- Detect usage of `SELECT *`
- Detect missing `WHERE` clause
- Detect `ORDER BY` without `LIMIT`
- Detect leading wildcard `LIKE`
- Detect usage of `DISTINCT`
- Generate optimization recommendations
- Calculate an optimization score
- Store analysis history in MongoDB
- View previous analyses

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Other Libraries

- node-sql-parser

---

## Project Structure

```
SQL Query Analyzer
│
├── backend
│   ├── controllers
│   ├── models
│   ├── parser
│   ├── routes
│   ├── ruleEngine
│   └── utils
│
├── frontend
│   ├── src
│   │   ├── components
│   │   └── pages
│   └── public
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/ashokkchoudhary/SQL-Query-Analyzer.git
```

---

### Backend

```bash
cd backend
npm install
node server.js
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### Analyze SQL Query

```
POST /analyze
```

### Get Analysis History

```
GET /history
```

### Get Analysis by ID

```
GET /history/:id
```

### Delete Analysis

```
DELETE /history/:id
```

---

## Future Improvements

- Add support for more SQL optimization rules
- Improve UI with charts and visual indicators
- Add user authentication
- Export analysis reports
- Support multiple SQL dialects

---

## Author

Ashok Choudhary

Final Year B.E. Computer Science (Data Science)