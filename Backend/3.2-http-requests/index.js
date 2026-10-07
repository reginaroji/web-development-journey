import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => { // "/" hace referencia al home page
    // console.log(req.rawHeaders); // req.rawHeaders es una lista de info que contiene la respuesta del servidor en listada. Incluye info como el localhost, el navegador, el sistem operativo desde el que se accesa, etc.
    // res.send("Hello World!"); // La respuesta es lo que se mostrará en la pantalla del navegador. Puede ser texto plano
    res.send("<h1>Hello!</h1>"); // O puede ser HTML.
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1> <p>Hello my name is Regina :)</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me!</h1> <p>Let's be in touch! You can follow me on my social media.</p>")
});

app.listen(port, () => {
    console.log(`Server running at port ${port}.`);
});