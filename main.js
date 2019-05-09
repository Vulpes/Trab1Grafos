const grafo = require('./CriaGrafo')
const fs = require('fs')
var content = fs.readFileSync('./teste.txt','utf-8')

let rep = grafo.grafo(2,content,'texto')
console.log(rep)
