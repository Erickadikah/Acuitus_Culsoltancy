//server funcionality
const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('../server/routes/messageRoute');
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/', messageRoutes);

dotenv.config();

//connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('connected to database');
})
.catch((error) => {
  console.log('connection failed', error);
});

//middleware
app.use(cors({
    origin: ['https://acuitus-culsoltancy.vercel.app/', 'http://localhost:5173'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});