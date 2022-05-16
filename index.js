const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.get("/", (req, res) => {
    res.send("Clean Co Live server is up and running")
})

app.listen(port, () => {
    console.log('Listening to clean co, port', port);
})