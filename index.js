//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
app.use(bodyParser.urlencoded({ extended : true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    console.log(req.body.password)
    if (req.body.password === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else { 
        res.sendFile(__dirname + "/public/index.html")
    }

})