const express = require('express');
const Router = express.Router();

const Libro = require('../models/Libro');

const { requiredScopes } = require("express-oauth2-jwt-bearer");

Router.get('/', requiredScopes("read:libros"), async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'error al obtener libros' });
    }
});

Router.post('/', requiredScopes("write:libros"), async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    } catch (error) {
        res.status(500).json({ error: 'error al crear libro' });
    }
});


Router.put('/:id', requiredScopes("write:libros"), async (req, res) => {
    try {
        const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            });
        res.json(Libro);
    } catch (error) {
        res.status(500).json({ error: 'error al actualizar el libro' });
    }
});

Router.delete('/:id', requiredScopes('write:libros'), async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.json({ message: 'Libro eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'error al eliminar libro' });
    }
});


module.exports = Router;