const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UsersModel = require("./models/UsersModel"); // Ensure the path is correct

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://renukagopaloo1:VxuhyFLVypPEC0iO@users.yfo3hdo.mongodb.net/?retryWrites=true&w=majority", {
    ssl: true,
    tlsInsecure: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const user = await UsersModel.create(userData);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ message: 'Bad Request', error });
    }
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
