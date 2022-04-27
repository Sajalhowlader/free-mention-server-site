const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

// Middle were
app.use(cors())
app.use(express.json())
// user    freeMention
// pass   zswQGcU9Kr696RD6



const uri = "mongodb+srv://freeMention:<password>@cluster0.jyqia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.get('/', (req, res) => {
    res.send("Free Mention Server is connect")
})

app.listen(port, () => {
    console.log("Free Mention Server is running on port", port);
})