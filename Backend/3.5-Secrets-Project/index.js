//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userAuthorized = false;

app.use(express.urlencoded({extended:true}));

const userAuthorization = (req, res, next) => {
    if (req.body.password === "holiwis")
        userAuthorized = true;
    next();
};

app.use(userAuthorization);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    // if (req.body.password === "holiwis") {
    //     res.sendFile(__dirname + "/public/secret.html");
    // }
    // else {
    //     res.sendFile(__dirname + "/public/index.html")
    // }

    if (userAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        // res.sendFile(__dirname + "/public/index.html")
        res.redirect("/"); // redirige a la home page.
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});