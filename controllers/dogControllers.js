const express = require('express')
const router = express.Router()
const Dog = require('../models/dog')

const dogController = {
    find: async (req, res) => {
        try {
            const Doggy = await Dog.find({})
    
            res.render('dog/index.ejs', {
                dogs : Doggy
            })
    
        } catch (err) {
            res.send(err)
        }
    },
    makePerrito: async (req, res, next) => {
        try {
            res.render('dog/new.ejs');
        } catch(err) {
          res.send(err);
        }
      },
    newDog: async (req, res) => {
        if ( req.body.isHouseBroken === 'on') {
            req.body.isHouseBroken = true
        } else {
            req.body.isHouseBroken = false
        }
        console.log(req.body)
        try {
          const newDog = await Dog.create(req.body)
          res.redirect('/dog')
        } catch (err) {
            res.send(err)
        }
    },
    showOne: async (req, res) => {
        try {
            const foundDog = await Dog.findById(req.params.id)
            res.render('dog/show.ejs', {
                dog : foundDog
            })
        } catch (err) {
            res.send(err)
        }
    },
    editOne: async (req, res) => {
        try {
            
            const foundDog = await Dog.findById(req.params.id)

            console.log(foundDog, '<-- in edit button')
            res.render('dog/edit.ejs', {
                dog : foundDog
            })
        } catch (err) {
            throw(err)
        }
    },
    updateOne: async (req, res) => {
        try {
            // console.log(req.body)

        } catch (err) {
            res.send(err)
        }
        // const updateDog = Dog.findByIdAndUpdate(req.params.id)
    }

} 

module.exports = dogController;