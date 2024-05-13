const { response } = require('express');
const { Pelicula } = require('../models');


const obtenerPeliculas = async(req, res = response ) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, peliculas ] = await Promise.all([
        Pelicula.countDocuments(query),
        Pelicula.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        peliculas
    });
}

const obtenerPelicula = async(req, res = response ) => {

    const { id } = req.params;
    const pelicula = await Pelicula.findById( id )
                            .populate('usuario', 'nombre')
                            .populate('categoria', 'nombre');

    res.json( pelicula );

}

const crearPelicula = async(req, res = response ) => {

    const { estado, usuario, ...body } = req.body;

    const peliculaDB = await Pelicula.findOne({ nombre: body.nombre });

    if ( peliculaDB ) {
        return res.status(400).json({
            msg: `La pelicula ${ peliculaDB.nombre }, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }

    const pelicula = new Pelicula( data );

    // Guardar DB
    await pelicula.save();

    res.status(201).json(pelicula);

}

const actualizarPelicula = async( req, res = response ) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    if( data.nombre ) {
        data.nombre  = data.nombre.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const pelicula = await Pelicula.findByIdAndUpdate(id, data, { new: true });

    res.json( pelicula );

}

const borrarPelicula = async(req, res = response ) => {

    const { id } = req.params;
    const peliculaBorrada = await Pelicula.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( peliculaBorrada );
}




module.exports = {
    crearPelicula,
    obtenerPeliculas,
    obtenerPelicula,
    actualizarPelicula,
    borrarPelicula
}