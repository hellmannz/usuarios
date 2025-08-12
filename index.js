const express = require("express")
const app = express()
const port = 3002
app.use(express.json())

const usuarios = []

app.post("/usuarios", (req, res)=>{
    const usuario = req.body
    usuarios.push(usuario)
    res.send("Usuários cadastrado com sucesso!")
})

app.get("/usuarios", (req, res)=>{
    res.send(usuarios)
})

// produtos
const produtos = []

app.post("/produtos", (req, res) =>{
    const produto = req.body
    produtos.push(produto)
    res.send("Produto cadastrado com sucesso!")
})

app.get("/produtos", (req, res) => {
    res.send(produtos)
})




app.listen(port, ()=>{
    console.log("API RODANDO NA PORTA" + port)
})
