const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const searchData = {
    "apple": { title: "Apple", description: "A fruit" },
    "banana": { title: "Banana", description: "Another fruit" },
    
};

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/:q", (req, res) => {
    let { q } = req.params;
    
    if (q && searchData[q]) {
        
        res.render("home.ejs" , {q})
    } else {
        
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});
