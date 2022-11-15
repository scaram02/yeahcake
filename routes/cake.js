const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Cake = require('../models/Cake')
const {cloudinary} = require('../utils/cloudinary.js')


// rate a new cake
router.post('/', async (req, res, next) => {
    const {cafe, city, country, notes, presentation, taste, texture, price, imageUrl} = req.body
    const uploadResponse = await cloudinary.uploader.upload(imageUrl, {
        upload_preset: 'ml_default' // set folder name/presets on Cloudinary
    }).catch(err => { 
        res.json(err) 
    })
    .then(uploadResponse => {
        Cake.create({
        cafe, city, country, notes, presentation, taste, texture, price, imageUrl: uploadResponse.secure_url,
        user: [req.user._id]
    })
    .then(
        cake => {
            console.log("------c a k e    a d d e d ------", cake)
            res.json(cake)
        }
    )
})  
.catch(err => { res.json(err) })
    })




// get all the cake that belongs to the user!
router.get('/:id', (req, res) => {
    const id = req.params.id
          Cake.find({user: id})
          .populate('user')
          .then(cakes => {
              res.json(cakes)
          })
          .catch(err => {
              console.log(err)
          })
      })

// view  all cakes
router.get('/', (req, res) => {
    Cake.find()
    .populate('user')
    .then(cake => {
        res.json(cake)
    })
})





  
module.exports = router;