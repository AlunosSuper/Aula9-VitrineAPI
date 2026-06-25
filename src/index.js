import express from "express"  // Passo 1
import cors from "cors"
import Rotas from "./Rotas.js"
import "./database/Conexao.js"  // Passo 6

const servidor = express()     // Passo 2

servidor.use(cors())           // Passo 3
servidor.use(express.json())
servidor.use(Rotas)            // Passo 5 resgistra as rotas no servidor

servidor.listen(4000, function() {   // Passo 4
  console.log("SERVIDOR EM FUNCIONAMENTO!")
  console.log("http://localhost:4000/")
})
