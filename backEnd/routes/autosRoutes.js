const express = require('express')
const router = express.Router()
const { getAutos, setAuto, updateAuto, deleteAuto} = require('../controllers/autosController')

router.route('/').get(getAutos).post(setAuto)
router.route('/:id').delete(deleteAuto).put(updateAuto)

module.exports = router