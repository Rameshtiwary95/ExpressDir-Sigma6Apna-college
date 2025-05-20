const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port,() => {
    console.log(`app is listing on port ${port}`);
});

app.get("/",(req, res) => {
    res.send("Hello, i am root");
})

app.get("/:username/:id",(req, res) => {
   let { username, id } = req.params;
   let htmlstr =`<h1>welcometo the page of @${username}</h1>`
    res.send(htmlstr);
});

app.get("/search",(req,res) =>{
    let {q} =req.query;
    res.send(`search result for query: ${q}`)
});
// app.get("/apple",(req, res) => {
//     res.send("you contacted apple path");
// }) 
// app.get("/orange",(req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("/",(req,res) => {
//     res.send("hello i am root");
// });
// app.post("/", (req,res) => {
//     res.send("i sent a post request to root");
// });

// app.use((req, res) => {
//     // console.log(req);
//    console.log("request received");
//    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//    res.send(code);
//    });
