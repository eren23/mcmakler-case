const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

var cors = require("cors");
var app = express();

app.use(cors());

//Connect to our db finally
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

//Define routes
app.use("/api/users", require("./routes/api/users"));

//Serve static assests in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(` Server is running on port ${PORT}`));
