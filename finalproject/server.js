const express = require("express");
require('./boot/mongo_connect')
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())