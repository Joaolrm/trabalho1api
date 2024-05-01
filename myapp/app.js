let listaProdutos = [
  {
      id: 1
      ,nome: "arroz"
      ,categoria: "alimento"
      ,preco: 5.80
  }
  ,{
      id: 2
      ,nome: "leite"
      ,categoria: "bebida"
      ,preco: 4.25
  }
];

let produto2 = {
    id: 2
    ,nome: "leite"
    ,categoria: "bebida"
    ,preco: 4.25
  }

const express = require('express')
// Framework para criar as rotas
const app = express()
// Porta que os dados vão vir
const port = 3000

// Conversor de binario para JSON
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Get da lista de produtos
app.get('/produtos', (req, res) => {
  res.json(listaProdutos)
})

//  Inserindo um produto na lista
app.post('/produtos', (req, res) => {
  let produto = req.body;
  if(produto && produto.nome && produto.preco ){
    produto.id = 3;
    res.status(201).json(produto)
  }
  else{
    res.status(400).json({erro : "Nome e preço obrigatorios."})
  }
})

// Get do produto pelo id
app.get('/produtos/:id', (req, res) => {
  const id = req.params.id;
  if(id == 2){
    res.json(produto2);
  }
  else{
    res.status(404).json({erro: "Produto não encontrado"})
  }
  
})

// Atualizando o produto do id
app.put('/produtos/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Atualizando o produto ${id}`)
})

// Delete do produto especifico pelo id
app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Deletando o produto ${id}`)
})

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor inicializado na porta: ${port}`)
})