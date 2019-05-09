const cor = require('./colorir')
const mm = require('./verticeMaiorGrau')

const colo = (grafo)=>{
    let lista = grafo.representacao
	let vertice = mm.maiorGrau(grafo)
	let quantVertice = grafo.quantidade
	let aux = []
	for(let i = 0; i < quantVertice; i++){
		let obj = {
			cor: 'incolor',
			adj: lista[i]
		}
		aux[i] = obj
			
		}

		return cor.colorir(aux,vertice)
}
module.exports={colo}