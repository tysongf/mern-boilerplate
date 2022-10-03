require("dotenv").config();
const express = require("express");
//const config = require('./app/config/auth.config');
const db = require("./app/models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const httpServer = require("http").createServer(app);
let PORT;

process.env.STATUS === "production"
   ? (PORT = process.env.PROD_PORT)
   : (PORT = process.env.DEV_PORT);

httpServer.listen(PORT, () => {
   console.log(`Server in ${process.env.STATUS} mode, listening on *:${PORT}`);
});
db.sequelize.sync();
