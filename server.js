const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.json());

// Serve static files from the React app FOR BUILD
app.use(express.static(path.join(__dirname, "/build")));

const PORT = process.env.PORT || 3000;

//mongodb atlas cluster connection string
const uri =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASS +
  "@citation.ragwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connect to mongodb cloud, creates mongodb client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MONGODB QUERIES
app.get("/api/Total", (request, response) => {
  
  client.connect((err)=>{
    const collection =client.db("Leaderboard").collection("Total");
    console.log("CONNECTED TO DB");
    
    const data = collection.find().sort({score:-1}).toArray().then(res => {
      client.close();
      console.log(res);
      response.status(200).end(
        JSON.stringify({
          board: res,
        })
      )
    });
  });
});

//for build
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
});

// //for dev
// app.get("/", (req, res) => {
//   res.send();
// });

app.listen(PORT, () => {
  console.log("APP LISTENING AT " + PORT);
});

// client.close();
