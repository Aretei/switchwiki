const nodemailer = require('nodemailer')
require ('dotenv').config()
const { EMAIL, PASSWORD } = process.env

module.exports = {
    allSwitch: (req, res) => {
        const db = req.app.get('db')
        db.getAll()
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(e => console.log(e))
    },
    linear: (req, res) => {
        const db = req.app.get('db')
        db.getLinear()
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(e => console.log(e))
    },
    tactile: (req, res) => {
        const db = req.app.get('db')
        db.getTactile()
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(e => console.log(e))
    },
    getSwitch: (req, res) => {
        const db = req.app.get('db')
        db.getSwitch(req.params.id)
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(e => console.log(e))
    },
    getReview: (req, res) => {
        const db = req.app.get('db')
        db.getReview(req.params.id)
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(e => console.log(e))
    },
    postReview: (req, res) => {
        const db = req.app.get('db')
        const {id, review} = req.body
        db.postReview(id, review)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }) 
        .catch(e => console.log(e))
    },
    editReview: (req, res) => {
        const db = req.app.get('db')
        const {id, review} = req.body
        db.editReview(id, review)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }) 
        .catch(e => console.log(e))
    },
    deleteReview: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.body
        db.deleteReview(id)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }) 
        .catch(e => console.log(e))
    },
    sendEmail: async (req, res) => {

        const { email, username } = req.body

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            // host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            auth: {
              user: EMAIL,
              pass: PASSWORD
            }
          })
      
          let info = await transporter.sendMail({
            from: '"Sam" <sammmthompson@gmail.com>',
            to: email,
            text: `Hello ${username}! Thanks for registering for Switch Wiki!`
          })
      
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
      

    }
}