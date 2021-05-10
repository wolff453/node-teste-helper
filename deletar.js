const express = require("express")
const database = require("./conexao")
const router = express.Router()


router.patch("/:ID", (req,res) => {

    async function upd(){
        const up = await database.where({ID:req.params.ID}).update(req.body).table("usuarios")
        console.log(up)
        res.send(req.body)
   
    }
    upd()
})

module.exports = router