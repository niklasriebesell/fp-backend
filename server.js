const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/user");
const db = require("./db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
db();
// STARTSEITE
app.get("/", (req, res) => {
  res.send("Willkommen zu unserem Abschlussprojekt");
});
// GET ALL Users && CREATE USER
app.use("/user", userRouter);

// LISTENING
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
