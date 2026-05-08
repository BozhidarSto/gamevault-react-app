# GameVault

GameVault is a ReactJS web application for managing a personal video game collection.

The application allows users to register, log in, view games, add new games, edit existing games, delete games and view detailed information about each game.

## Technologies Used

- ReactJS
- Vite
- React Router DOM
- JSON Server
- JavaScript
- CSS
- Git and GitHub

## Main Functionalities

- Register form
- Login form
- Basic authentication with localStorage
- Protected routes
- Navigation bar
- View games from REST API
- Add new game
- Edit existing game
- Delete game
- View game details
- Responsive design

## REST API

The project uses JSON Server as a fake REST API.

Main endpoints:

```txt
GET    /games
GET    /games/:id
POST   /games
PUT    /games/:id
DELETE /games/:id

GET    /users
POST   /users
```

## Test Account

```txt
Email: admin@test.com
Password: 123456
```

## How to Run the Project

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Start the JSON Server:

```bash
npm run server
```

Open the application in the browser:

```txt
http://localhost:5173
```

The REST API runs on:

```txt
http://localhost:3000
```

## Project Structure

```txt
gamevault/
  db.json
  package.json
  README.md
  src/
    components/
      GameCard.jsx
      Navbar.jsx
      ProtectedRoute.jsx
    pages/
      About.jsx
      AddGame.jsx
      EditGame.jsx
      GameDetails.jsx
      Games.jsx
      Home.jsx
      Login.jsx
      Register.jsx
    App.jsx
    main.jsx
    index.css
```

## Project Description

This project was created as a ReactJS course project. It demonstrates the use of components, routing, forms, hooks, REST API requests, authentication and GitHub version control.

The main idea of the application is to provide a simple and user-friendly way to manage a personal video game collection. The data is loaded dynamically from a REST API created with JSON Server.

## Notes

The `node_modules` folder should not be uploaded manually. It can be restored by running:

```bash
npm install
```
## Author

Bozhidar Stoyanov