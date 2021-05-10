const express = require("express")
const router = express.Router()
const database = require("./conexao")
router.get("/", (req,res) => {
        database.select().table("usuarios").then(e => {
            res.send({
                e:e
            })
        })
})

module.exports = router