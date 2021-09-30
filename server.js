import express from "express"
import path from "path"

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));

//for build
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {res.sendFile(path.join(__dirname + "/build/index.html"))})
app.listen(PORT, () => { console.log("APP LISTENING AT " + PORT) })