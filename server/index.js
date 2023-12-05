import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import connectDB from "./app/config/db.js";
import ArticleRouter from "./app/routes/ArticleRouter.js";
import AuthRouter from "./app/routes/AuthRouter.js"

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        name: "bezkoder-session",
        keys: ["COOKIE_SECRET"],
        httpOnly: true
    })
);

app.use("/api", ArticleRouter);
app.use("/api/auth", AuthRouter);


connectDB();
app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});