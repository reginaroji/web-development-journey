import express from "express";
import axios from "axios";
// import { json } from "body-parser";
// import { json } from "body-parser";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "3c7360c1-0acd-4182-80ed-404ad7cfcbb8"; // Primero agregamos mi token porque todos los endpoints exigen el uso de un token
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` }, // Definimos el config desde el inicio para no hacerlo para cada endpoint
};

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => { // Todos los métodos son post porque se llega a estas páginas a través de un form, lo que cambia son los endpoints de cada botón
  const searchId = req.body.id; // el método get requiere de pasar el id como parámetro (según la documentaciónde la api de Angela), el id lo obtenemos del form
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config); // GET https://secrets-api.appbrewery.com/secrets/1 - mediante API_URL + "/secrets/" + searchId armamos una url como la del ejemplo, config contiene el header con nuestro token. La api de Angela borra el token cada cierto tiempo, entonces hay que volverlo a crear si empieza a fallar el código
    res.render("index.ejs", { content: JSON.stringify(result.data) }); // mostramos el resultado/respuesta de la api en el front
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  try {
    const result = await axios.post(API_URL + "/secrets", {
      secret: req.body.secret,
      score: req.body.score
    }, config); 

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { conten: JSON.stringify(error.response.data) })
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  try {
    const result = await axios.put(API_URL + "/secrets/" + searchId, req.body, config); // para el método post yo escribí explícitamente {secret: req.body.secret, score: req.body.score}, pero podría usar solo req.body, porque tal cual contiene la info ya en forma de objeto que me pide la api. Osea, req.body = {secret: req.body.secret, score: req.body.score}

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.

  try {
    const result = await axios.patch(API_URL + "/secrets/" + searchId, {
      secret: req.body.secret,
      score: req.body.score
    }, config);

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.

  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: json.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
