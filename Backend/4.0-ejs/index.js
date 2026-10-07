import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// ---- Sin middleware ----
// const today = new Date();
// const dayNumber = today.getDay();

// ---- Como si fuera middleware ----
let dayNumber;

const determineDay = (req, res, next) => {
    const today = new Date();
    dayNumber = today.getDay();
    next();
};

app.use(determineDay);

app.get("/", (req, res) => {
    if (dayNumber > 0 && dayNumber < 6) {
        console.log(dayNumber);
        res.render(__dirname + "/views/index.ejs", {typeOfDay: "a weekday", activity: "work hard"});
    }
    if (dayNumber === 0 || dayNumber === 6) {
        console.log(dayNumber);
        res.render(__dirname + "/views/index.ejs", {typeOfDay: "the weekend", activity: "have fun"});
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});