const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');


routes.post("/boxes", BoxController.store);
routes.post("/files", multer(multer.Config).single('file'), FileController.store);

module.exports = routes; 