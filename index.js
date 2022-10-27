const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const coursesData = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Code course api running");
});

app.get("/coursesInfo", (req, res) => {
  res.send(coursesData);
});

app.get("/coursesInfo/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = coursesData.filter((c) => c.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("CodeForce Server running on port :", port);
});
