import mongoose from "mongoose"
import "dotenv/config"

const endereco = process.env.MONGO_URI

mongoose.connect(endereco)
  .then(() => console.log("CONECTADO COM O BANCO DE DADOS! "))
  .catch(err => console.log(err))
