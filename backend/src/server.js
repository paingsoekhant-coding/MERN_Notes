import express from "express";
import routes from "./routes/routes.js"
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimits.js";
import cors from "cors";
import path from "path";

dotenv.config(); //.env file config

const app = express();
const PORT = process.env.PORT || 3000;
// const __dirname = path.resolve();

// if(process.env.NODE_ENV !== "production") {
//
//
// }

app.use(cors({
    origin: "http://localhost:5173",
}));

//middleware
app.use(express.json());//this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


app.use("/api/notes",routes);

// if(process.env.NODE_ENV === "production") {
//
//     app.use(express.static(path.join(__dirname,"../frontend/dist")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
//     });
// }

await connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port:",PORT);
    });
});
