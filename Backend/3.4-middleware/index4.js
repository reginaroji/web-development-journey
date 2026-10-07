import express from "express";
import { dirname } from "path"; // permite usar la variable __dirname
import { fileURLToPath } from "url"; 

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// var bandName;

app.use(express.urlencoded({extended:true}));

// function bandNameGenerator(req, res, next) {
//   bandName = req.body.street + req.body.pet;
//   next();
// }

// app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  let bandName = req.body.street + req.body.pet;
  res.send(`<p>${bandName}</p>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
