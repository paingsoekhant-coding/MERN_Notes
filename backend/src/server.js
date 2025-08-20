import express from "express";
import routes from "./routes/routes.js"
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimits.js";
import cors from "cors";

dotenv.config(); //.env file config

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:5173",
}));
//middleware
app.use(express.json());//this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


app.use("/api/notes",routes);

await connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port:",PORT);
    });
});



// mZCSj929STaP5NUZ

// mongodb+srv://babyboss7916:mZCSj929STaP5NUZ@cluster0.uhev138.mongodb.net/db_name?retryWrites=true&w=majority&appName=Cluster0