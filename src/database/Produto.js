import mongoose from "mongoose"

// 1. Definir o esquema — tipos de cada campo
const EsquemaProduto = new mongoose.Schema({
  codigo:    String,
  marca:     String,
  modelo:    String,
  preco:     Number,
  descricao: String,
  imagens:   [String],
  promocao:  Boolean
}, { versionKey: false })

// 2. Transformar em modelo (permite find, save etc.)
const Produto = mongoose.model("Produto", EsquemaProduto)

// 3. Exportar para usar nas rotas
export default Produto
