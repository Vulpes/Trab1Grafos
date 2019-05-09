const arestas = require('./funcoes/arestas')
const buscaEmLargura = require('./funcoes/buscaEmLargura')
const buscaEmProfundidade = require('./funcoes/buscaEmProfundidade')
const caminhoEntreDoisVertices = require('./funcoes/caminhoEntreDoisVertices')
const caminhoMFloyd = require('./funcoes/caminhoMFloyd')
const cmgao = require('./funcoes/CMGAO')
const coloracao = require('./funcoes/coloracao')
const colorir = require('./funcoes/colorir')
const components = require('./funcoes/components')
const converterMatriz = require('./funcoes/converterMatriz')
const dijkstra = require('./funcoes/dijkstra')
const heapRoot = require('./funcoes/heapRoot')
const heapSort = require('./funcoes/heapSort')
const lista = require('./funcoes/lista')
const matriz = require('./funcoes/matriz')
const ordenacaoTopologica = require('./funcoes/ordenacaoTopologica')
const ordenacaoVertices = require('./funcoes/ordenacaoVertices')
const prim = require('./funcoes/prim')
const reducaoFC = require('./funcoes/reducaoFC')
const representacao = require('./funcoes/representacao')
const swap = require('./funcoes/swap')
const transposto = require('./funcoes/transposto')
const verticeMaiorGrau = require('./funcoes/verticeMaiorGrau')


module.exports = {
    arestas,buscaEmLargura,buscaEmProfundidade,caminhoEntreDoisVertices,caminhoMFloyd,cmgao,coloracao,colorir,
    components,converterMatriz,dijkstra,heapRoot,heapSort,lista,matriz,ordenacaoTopologica,ordenacaoVertices,
    prim,reducaoFC,representacao,swap,transposto,verticeMaiorGrau

}