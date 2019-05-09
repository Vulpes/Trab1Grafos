const t = require('./transposto')
const o = require('./ordenacaoVertices')
const c = require('./components')
const redux = (grafo) => {
    let transposto = t.transp(grafo)
	let listaTempoBP = o.ordenacaoV(grafo,0)
	let quantVertice = grafo.quantidade
	let arrayVertices = []
	for(let i = 0; i < quantVertice; i++) arrayVertices.push(parseInt(listaTempoBP[i]))
	return c.comp(grafo,listaTempoBP,transposto)
}

module.exports = {
    redux
}