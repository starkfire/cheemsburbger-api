const express = require('express')
const router = express.Router()

const menuService = require('../services/menu.service')

router.get('/', menuService.getMenu)

module.exports = router