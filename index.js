const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yjj5r.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        console.log('db connected');
        const serviceCollection = client.db("cleanCo").collection("services");

        // get all services
        app.get("/services", async (req, res) => {
            const services = await serviceCollection.find({}).toArray();
            res.send(services);
        })
    }

    finally {

    }
}

run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Clean Co Live server is up and running");
})

app.listen(port, () => {
    console.log('Listening to clean co, port', port);
})