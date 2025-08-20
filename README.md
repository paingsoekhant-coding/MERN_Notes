# NoteTaking App (MERN Stack) 
A full-stack NoteTaking Web Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can create, edit, delete, and manage notes seamlessly with a clean UI and secure backend.
## Tech Stack
* Frontend:React.js + Vite
* Backend: Node.js + Express.js
* Database: MongoDB (Mongoose ODM)
* Other Tools:
  * dotenv → environment variables
  * cors → Cross-Origin support
  * express-rate-limit → security & rate limiting
  * concurrently → run backend & frontend together
## Installation & Setup
#### Clone Repo
```
git clone https://github.com/paingsoekhant-coding/MERN_Notes.git
cd MERN_Notes
```
#### Install Dependencies
```
npm run build 
```
#### Configure Environment Variables
Create .env file inside backend/:
```
MONGO_URI = your_mongodb_connection_string
PORT = 3000
NODE_ENV=development
```
#### Run the App
```
npm run start
```
* backend server run on port:3000
* frontend runs on port:5173