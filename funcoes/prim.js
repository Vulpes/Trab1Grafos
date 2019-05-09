const h = require('./heapSort')

const prim = (grafo)=>{
    let verticeEscolhido = 0
	let lista = grafo.representacao
	let quantVertice = grafo.quantidade
	let cont = []
	let prim = []
	let visitado = []
	for(let i = 0; i < quantVertice; i++){
		let obj = {
		    peso: "inf",
			pai: null
		}
		prim[i] = obj

			
		visitado[i] = false
		}

		prim[verticeEscolhido].peso = 0
		cont.push({vertice: verticeEscolhido, peso: 0})

		while(cont.length > 0){
			let u = cont.shift().vertice
			visitado[u] = true
			for(let i = 0; lista[u][i] != undefined; i++){
				let v = lista[u][i].vertice
				let w = lista[u][i].peso
				if(visitado[v] == false){
					if(prim[v].peso == "inf" || prim[v].peso > prim[u].peso){
						prim[v].peso = w
						prim[v].pai = u			
						cont.push({vertice: v, peso: w})			
					}
				}
				
			}
			h.hs(cont)
		}

		return pri
}

module.exports = {
    prim
}