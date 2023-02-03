const asyncHandler = require('express-async-handler')

const Auto = require('../models/autosModel')

const getAutos = asyncHandler(async (req, res) => {
    const autos = await Auto.find()

    res.status(200).json(autos)
})

const setAuto = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Por favor teclea una descripción de la autos')
    }

    const autos = await Auto.create({
        Marca: req.body.Marca,
        Modelo: req.body.Modelo,
        Año: req.body.Año,
        Color: req.body.Color
    })
    res.status(201).json(autos)
})

const updateAuto = asyncHandler(async (req, res) => {
        const autos = await Auto.findById(req.params.id)
        if (!autos) {
            res.status(400)
            throw new Error('Auto no encontrado')
           
        }
        const updateAuto= await Auto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateAuto)
})

const deleteAuto = asyncHandler(async (req, res) => {

    const autos = await Auto.findById(req.params.id)

    if (!autos) {
        res.status(400)
        throw new Error('Tarea no encontrada')
    }
    await autos.remove()
    res.status(200).json(req.params.id)
})

module.exports = {
    getAutos,
    setAuto,
    updateAuto,
    deleteAuto
}