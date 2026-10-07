import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

app.use(express.static("public"));

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "rroji";
const yourPassword = "secretsroji#";
const yourAPIKey = "1f10fc5b-b33f-4fb8-9639-c194ed21cce2";
const yourBearerToken = "0535664c-84f4-4484-aa03-4107069a1a3e";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

  try {
    const response = await axios.get(API_URL + "random"); // llamo a la api usando GET https://secrets-api.appbrewery.com/random  API_URL + "random"
    const responseString = JSON.stringify(response.data); // axios me regresa la respuesta en forma de objeto, así que la convierto en una string para mostrarla en el frontend

    console.log(response.data);

    res.render("index.ejs", {content: responseString});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render ("index.ejs", {content: error.message});
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

  try {
    const response = await axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const responseString = JSON.stringify(response.data);
    console.log(response.data);

    res.render("index.ejs", {content: responseString});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render ("index.ejs", {content: error.message});
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  // ejemplo: GET https://secrets-api.appbrewery.com/filter?score=5&apiKey=b886c845-9989-43aa-8c60-ea4a669bb587

  try {
    const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`);

    const responseString = JSON.stringify(response.data);

    res.render("index.ejs", {content: responseString});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render ("index.ejs", {content: error.message});
  }

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  // ejemplo: GET https://secrets-api.appbrewery.com/secrets/1

  try {
    const response = await axios.get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    const responseString = JSON.stringify(response.data);

    res.render("index.ejs", {content: responseString});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render ("index.ejs", {content: error.message});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
