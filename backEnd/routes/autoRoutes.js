const express = require('express')
const router = express.Router()
const { getAutos, setAuto, updateAuto, deleteAuto} = require('../controllers/autoController')
const { protect } = require('../middleware/authMiddleware')
router.route('/').get(protect,getAutos).post(protect,setAuto)
router.route('/:id').delete(protect,deleteAuto).put(protect,updateAuto)

module.exports = router