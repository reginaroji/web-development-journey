import express from "express";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.render("index.ejs", {title: "Write your name here:"});
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let name = req.body.fName + req.body.lName;
  console.log(name);
  let nameNumOfLetters = name.length;
  res.render("index.ejs", {title: `Your name has ${nameNumOfLetters} letters`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
