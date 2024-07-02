//Importamos el módulo de terceros Express
const express = require('express');

//modulo built-in path
const path = require('path');

//custom module palindrome import
const utils = require('./utils/palindrome/index.js');

//Creamos una nueva instancia del servidor express
const app = express();

//Creamos una ruta dinámica con /check/:word
app.get('/check/:word', (req, res) => {
    console.log(req.params); 
    //el hecho de guardar el parámetro en una variable, hace más claro lo que estamos haciendo
    const word = req.params.word;
    
    //usamos la función palindrome del custom module index.js
    const isPalindrome = utils.palindrome(word);

    //si es true = palíndromo
    console.log(isPalindrome);

    if (isPalindrome) {
        res.send(`<h1> La palabra ${word} es un palíndromo`)
    } else {
        res.send(`<h1> La palabra ${word} no es un palíndromo`)
    }
});

// app.get('/check/:word', (req, res) => {
//     const word = req.params.word;
//     const message = palindrome(word) ? 'Es un palíndromo' : 'No es un palíndromo';
//     res.send(message);
// })

//Devolver un 404...
app.use((req, res) => {
    res.status(404).send('No está lo que buscabas...');
});

//Tenemos que levantar el servidor y escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor 4 corriendo correctamente en puerto 3000');
});

