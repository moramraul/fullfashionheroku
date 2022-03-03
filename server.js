const express = require("express");
require("dotenv").config(); 
const app = express();
const path = require("path");
const router = require("./routes/routes");
const connect = require("./database/mongo");

// para que funcione bien el body parsed
app.use(express.json())


// para vincular las rutas con server.js, se pone directamenten el archivo donde van a estar esas carpetas
app.use("/", router)


//ESTO ES LO DE STATIC
// app.use(express.static(__dirname + './client/public'));
// app.get('*', function(req, res) {
// res.sendFile('index.html', { root: './client/public'});
// })
// app.use(express.static("client/public"));
// app.use(express.static(path.join(__dirname, 'client/build')));

var port = process.env.PORT || 5000;
if (process.env.NODE_ENV  === "production") {
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  }


// aquí metemos el puerto en una variable y le decimos que nos escuche

// const port = 5500
app.listen(port, () => console.log(`Servidor en puerto: ${port}`))
