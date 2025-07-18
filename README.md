# URL Shortener Project – Frontend Test Submission

This repository contains my submission for the frontend developer test.

#Project Structure
A60205222117/
│
├── login-middleware/ # Node.js middleware for handling user login and token
└── react-frontend/ # React application for the URL Shortener



#The `login-middleware` folder contains a simple Express.js server that:

- Accepts client credentials (`clientID` and `clientSecret`)
- Verifies them and returns an access token
- Secures the `/shorten` endpoint using this token

#The `react-frontend` folder includes a React application that:

- Allows users to input a long URL
- Sends the request with an access token to the backend
- Displays the shortened URL on success


#How to Run the Project
- Node.js and npm
- Git
- React installed via `create-react-app`

  


