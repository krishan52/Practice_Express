const express = require("express");

const app = express(); 

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) => {
//     console.log("request recieved");
//     res.send("<h1>Hello Everyone</h1>");
// });


// app.get("/", (req,res) => {
//     res.send("This is the home page.");
// });

// app.get("/apple", (req,res) => {
//     res.send("Are you willing to buy apple");
// });

// app.get("/orange", (req,res) => {
//     res.send("Are you willing to buy orange");
// });
// app.post("/", (req,res) => {
//     res.send("This is the home page and you send post request");
// });
// app.get("/groot", (req,res) => {
//     res.send("Hey, I am groot.");
// });

app.get("/:username/:id", (req,res) => {
    console.log(req.params);
    let {username,id} = req.params;
    let htmlStr = `<h1>You logged in by username: ${username} and id: ${id}</h1>`;
    res.send(htmlStr); 
});

app.get("/search", (req,res) => {
    // console.log(req.query); 
    let {q} = req.query;
    if(!q) {
        res.send("No Result");
    } else {
        res.send(`Search Results for query: ${q}`);
    }
});