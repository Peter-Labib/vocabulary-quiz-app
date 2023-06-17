# Vocabulary Quiz App

The Vocabulary Quiz App is a web application that allows users to test their knowledge of different parts of speech. Users are presented with multiple-choice questions where they need to select the correct part of speech for a given word. At the end of the quiz, the app provides a rank based on the user's performance.

## Features

- Multiple-choice questions to test knowledge of parts of speech
- Progress bar to indicate the user's progress in the quiz
- Feedback on selected answers
- Rank calculation based on the user's performance
- REST API integration to fetch questions and calculate the rank

## Technologies Used

- React: JavaScript library for building user interfaces
- React Router: Library for routing and navigation in React applications
- React Context: Used for managing state across components
- React Hooks: Used for managing component state and lifecycle
- Node.js: JavaScript runtime environment for running the server-side code
- Express: Web framework for building server-side applications

## Installation

1. Clone the repository: `git clone https://github.com/Peter-Labib/vocabulary-quiz-app.git`
2. Navigate to the project directory: `cd vocabulary-quiz-app`
3. Install dependencies:
   - Client: `cd client && npm install`
   - Server: `cd server && npm install`
4. Start the application:
   - Client: `cd client && npm start`
   - Server: `cd server && npm start`
5. Open your browser and visit `http://localhost:3000` to access the app

## API Endpoints

- `GET /api/words`: Retrieve the list of words for the quiz
- `POST /api/rank`: Calculate and retrieve the user's rank based on their score

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
