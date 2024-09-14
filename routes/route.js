const express = require('express')
const router = express.Router()






const addData = require('../controller/AddFormData')
const getData = require('../controller/ShowData')
const updateData = require('../controller/UpdateData')
const deleteData = require('../controller/DeleteData')






router.post('/add', addData)
router.get('/show', getData)
router.post('/update', updateData)
router.delete('/delete/:id', deleteData)






module.exports = router