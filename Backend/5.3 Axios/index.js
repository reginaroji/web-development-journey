import express from "express";
// import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    // console.log("response:", response);
    const result = response.data;
    console.log("response.data:", response.data);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body); // req.body regresa algo como { type: '', participants: '3' } o { type: 'education', participants: '3' } No importa si type o participants o ambos están vacios, no dará error porque asi está hecha la api
  let urlFilter = `https://bored-api.appbrewery.com/filter?type=${req.body.type}&participants=${req.body.participants}` // aqui estoy armando la url con los querys necesarios
  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
  try {
    const response = await axios.get(urlFilter); // llamo a la api con la url que creé arriba y guardo la respuesta en la const response
    const result = response.data;
    // console.log("response.data:", result);

    let randomNum = Math.floor(Math.random() * result.length); // creo un número random en base al número de resultados result.length del erreglo que me regresó la api
    let randomActivity = result[randomNum]; // con el num ramdon elijo una de las actividades
    // console.log(randomActivity);

    res.render("index.ejs", { data: randomActivity }); // renderizo el resultado en el html usando "data" como el nombre de mi objeto para referenciarlo desde el html

  } catch (error) { // con el catch atrapo el error si no hay ningún resultado que matchee mis filtros
    console.error("Failed to make request:", error.message); // imprimo el error en consola
    res.render("index.ejs", {
      error: "No activities that match your criteria.", // reenderizo el error en el front usando "error" como el nombre de la string
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
