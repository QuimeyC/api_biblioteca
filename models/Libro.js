const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Bibliotecas', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;