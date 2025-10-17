Login-register

A full-stack authentication system built with Node.js, Express, and MongoDB. This application provides user registration, login, and session management functionalities.

🚀 Features

User Registration: Secure sign-up process with form validation.

User Login: Authentication with password hashing.

Session Management: Persistent user sessions using cookies.

MVC Architecture: Organized code structure for maintainability.

Environment Configuration: Utilizes .env for sensitive data.

🛠️ Technologies Used

Backend: Node.js, Express.js

Database: MongoDB

Authentication: bcryptjs, express-session

Environment Variables: dotenv

Templating Engine: EJS

Styling: CSS

📂 Project Structure
├── controllers/
│   └── authController.js
├── database/
│   └── connection.js
├── models/
│   └── User.js
├── routers/
│   └── authRouter.js
├── views/
│   ├── login.ejs
│   └── register.ejs
├── .env
├── index.js
├── package.json
└── README.md
