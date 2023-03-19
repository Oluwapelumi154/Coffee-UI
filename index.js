const express = require("express")
const app = express()
const server = require("http").createServer(app)
let host = "0.0.0.0"
const port = process.env.PORT || 4000
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use("/", express.static("static"))

//special offer post
app.post("/specialoffer", (req, res) => {
    console.log(req.body)
    res.redirect("/index.html")
})
// book table
app.post("/booktable", (req, res) => {
    console.log(req.body)
    res.redirect("/index.html")
})

app.post("/newsletter", (req, res)=> {
    console.log(req.params)
    res.redirect("/index.html")
})

server.listen(
    port, () => {
        console.log(`server is running http://${host}:${port} `);
    }
)