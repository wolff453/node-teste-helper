const express = require("express")
 const cadastro = require('./cadastro')
 const listagem = require("./listagem")
 const deleta = require("./deletar")
const app = express()
const cors = require("cors")
 app.use(cors())
//BODY PARSER DO EXPRESS
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//FIM


 

//ROTAS
    app.use("/cadastro", cadastro)
    app.use("/listagem", listagem)
    app.use("/deletar", deleta)
 //FIM





//ERRO CASO NÃO EXISTA ROTA
app.use((req,res,next) => {
    throw new Error("Essa rota não existe!")
    
})
app.use((error,req,res,next) => {
    res.send(error.message)
})
//FIM


//RODANDO APP
app.listen(8084, () => {
    console.log("logado")
} )
//FIM