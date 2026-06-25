import express from "express"

const rotas = express.Router()

// Retorna todos os produtos
rotas.get("/produtos", async function(requisicao, resposta) {
  resposta.sendStatus(200)
})

// Retorna um produto pelo codigo
rotas.get("/produto/:codigo", async function(requisicao, resposta) {
  resposta.sendStatus(200)
})

// Retorna produtos em promocao
rotas.get("/promocao", async function(requisicao, resposta) {
  resposta.sendStatus(200)
})

// Salva um novo produto
rotas.post("/catalogar", async function(requisicao, resposta) {
  resposta.sendStatus(201)
})

// Rotas inexistentes
rotas.use((requisicao, resposta) => {
  resposta.sendStatus(404)
})



export default rotas
