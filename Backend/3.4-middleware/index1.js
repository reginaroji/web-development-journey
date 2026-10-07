import express from "express";
import { dirname } from "path"; // permite usar la variable __dirname
import { fileURLToPath } from "url"; // permite usar la variable __dirname
// import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
// Si estás usando Express versión 4.16.4 o superior, no hace falta body-parser para nada, ya que viene incorporado por defecto en Express como una dependencia, con las funciones express.json() y express.urlencoded(). Desconozco el curso que estás haciendo, pero si te recomiendan usar body-parser junto con Express, tal vez no esté muy actualizado. Saludos – 
// Mauricio Contreras
// https://es.stackoverflow.com/questions/392306/qu%C3%A9-es-body-parse-y-para-qu%C3%A9-sirve

app.post("/submit", (req, res) => {
  console.log(req.body);
  // console.log(req.body.pet);
});

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
