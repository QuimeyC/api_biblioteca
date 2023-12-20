const express = require('express');
const app = express();
app.use(express.json());
// Importamos el Router de Libros
const librosRouter = require('./routes/libros');
// Importamos el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHandler);

app.listen(3001, () => {
    console.log('servidor iniciado en el puerto 3001');
});