const express = require("express")
const database = require("./conexao")
const router = express.Router()


router.post("/", (req,res) => {
    const data = {
        nome: req.body.nome,
        email: req.body.email,
        CPF_CNPJ: req.body.CPF_CNPJ,
        logradouro: req.body.logradouro,
        número: req.body.número,
        bairro: req.body.bairro,
        uf:req.body.uf,
        localidade:req.body.localidade,
        complemento:req.body.complemento,
        cep:req.body.cep,
        telefone:req.body.telefone
    }
    
        async function insert(){
            try {
                const consult = await database.where({email: req.body.email, CPF_CNPJ: req.body.CPF_CNPJ }).select().table("usuarios")
            if(consult.length > 0) {
                return res.send({
                    message:"Esses dados já existem!"
                })
            }
             
            const inserting = await database.insert(data).into("usuarios")
             if(inserting) {
                 return res.status(200).send({
                     message:"Inserido com sucesso!"
                 })
             }
             res.send({
                 message:"Erro ao inserir dados!"
             })
            } catch (error) {
                console.log(error)
            }
            

        }
         insert()
})


module.exports = router


 