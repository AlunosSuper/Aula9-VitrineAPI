import express from "express"
import Produto from "./database/Produto.js"

const rotas = express.Router()

// Retorna todos os produtos
rotas.get("/produtos", async function(requisicao, resposta) {
  try {
    const resultados = await Produto.find()

    if (resultados.length > 0)
      resposta.status(200).json(resultados)
    else
      resposta.sendStatus(404)
  }
  catch (erro) {
    console.log(erro.message)
    resposta.sendStatus(500)
  }
})


// Retorna um produto pelo codigo
  rotas.get("/produto/:codigo", async function(requisicao, resposta) {
  const { codigo } = requisicao.params

  try {
    const resultado = await Produto.findOne({ codigo: codigo })

    if (resultado)
      resposta.status(200).json(resultado)
    else
      resposta.sendStatus(404)
  }
  catch (erro) {
    console.log(erro.message)
    resposta.sendStatus(500)
  }
})


// Retorna produtos em promocao
rotas.get("/promocao", async function(requisicao, resposta) {
  try {
    const resultados = await Produto.find({ promocao: true })

    if (resultados.length > 0)
      resposta.status(200).json(resultados)
    else
      resposta.sendStatus(404)
  }
  catch(erro) {
    console.log(erro.message)
    resposta.sendStatus(500)
  }
})


// Salva um novo produto Catalogar
rotas.post("/catalogar", async function(requisicao, resposta) {
  try {
    const novoProduto = new Produto({
      codigo:    requisicao.body.codigo,
      marca:     requisicao.body.marca,
      modelo:    requisicao.body.modelo,
      preco:     Number(requisicao.body.preco),
      descricao: requisicao.body.descricao,
      imagens:   requisicao.body.imagens,
      promocao:  requisicao.body.promocao
    })

    const resultado = await novoProduto.save()
    resposta.status(201).json(resultado)
  }
  catch(erro) {
    console.log(erro.message)
    resposta.sendStatus(500)
  }
})


// Rotas inexistentes
rotas.use((requisicao, resposta) => {
  resposta.sendStatus(404)
})



export default rotas
