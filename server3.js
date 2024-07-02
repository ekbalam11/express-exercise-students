//Importamos el módulo de terceros Express
const express = require('express');

//Creamos una nueva instancia del servidor express
const app = express();

app.get('/team', (req, res) => {
    res.sendFile(__dirname + "/server3-files/team.html")
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/server3-files/about.html");
});


//Tenemos que levantar el servidor y escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor 3 corriendo correctamente en puerto 3000');
});

