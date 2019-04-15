const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb+srv://db_filipe:luizfilipe107@cluster0-vqkw5.mongodb.net/curso?retryWrites=true",
    {
    useNewUrlParser: true,

    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(require('./routes'));

app.listen(3333); 