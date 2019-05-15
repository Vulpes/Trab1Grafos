var buscaEmLargura  = require('./buscaEmLargura');
var buscaEmProfundidade  = require('./buscaEmProfundidade');
var caminhoEntreDoisVertices = require('./caminhoEntreDoisVertices');
var caminhoMFloyd =  require('./caminhoMFloyd');
var CMGAO = require('./CMGAO');
var coloracao = require('./coloracao');
var components = require('./components');
var converterMatriz = require('./converterMatriz');
var dijkstra = require('./dijkstra');
var heapRoot = require('./heapRoot');
var heapSort = require('./heapSort');
var lista = require('./lista');
var matriz = require('./matriz');
var ordenacaoTopologica = require('./ordenacaoTopologica');
var ordenacaoVertices = require('./ordenacaoVertices');
var prim = require('./prim');
var reducaoFC = require('./reducaoFC');
var representacao = require('./representacao');
var swap = require('./swap');
var transposto = require('./transposto');
var verticeMaiorGrau = require('./verticeMaiorGrau');

module.exports = {
    buscaEmLargura,
    buscaEmProfundidade,
    caminhoEntreDoisVertices,
    caminhoMFloyd,
    CMGAO,
    coloracao,
    components,
    converterMatriz,
    dijkstra,
    heapRoot,
    heapSort,
    lista,
    matriz,
    ordenacaoTopologica,
    ordenacaoVertices,
    prim,
    reducaoFC,
    representacao,
    swap,
    transposto,
    verticeMaiorGrau
}