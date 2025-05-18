const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port,() => {
    console.log(`app is listing on port ${port}`);
});

app.get("/",(req, res) => {
    res.send("you contacted root path");
})

app.get("/apple",(req, res) => {
    res.send("you contacted apple path");
}) 
app.get("/orange",(req, res) => {
    res.send("you contacted orange path");
});

// app.get("*",(req,res) => {
//     res.send("this path does not exist");
// });
app.post("/", (req,res) => {
    res.send("you sent a post request to root");
});

// app.use((req, res) => {
//     // console.log(req);
//    console.log("request received");
//    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//    res.send(code);
//    });
