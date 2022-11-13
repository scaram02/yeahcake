const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Cake = require('../models/Cake')

// rate a new cake
router.post('/', (req, res) => {
    const {cafe, city, country, notes, presentation, taste, texture, price} = req.body

    Cake.create({
        cafe, city, country, notes, presentation, taste, texture, price,
        user: [req.user._id]
    })
    .then(
        cake => {
            console.log("------c a k e    a d d e d ------", cake)
            res.json(cake)
        }
    )
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