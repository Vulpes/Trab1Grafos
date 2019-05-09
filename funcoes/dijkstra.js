const h = require('./heapSort')
const dijkstra = (grafo,verticeEscolhido)=>{
    let lista = grafo.representacao
		let quantVertice = grafo.quantidade
		let cont = []
		let dijkstra = []
		let visitado = []
		

		for(let i = 0; i < quantVertice; i++){
			let obj = {
				peso: "inf",
				pai: null
			}
			dijkstra[i] = obj

			
			visitado[i] = false
		}

		dijkstra[verticeEscolhido].peso = 0
		cont.push({vertice: verticeEscolhido, peso: 0})

		while(cont.length > 0){
			let u = cont.shift().vertice
			visitado[u] = true
			for(let i = 0; lista[u][i] != undefined; i++){
				let v = lista[u][i].vertice
				let w = lista[u][i].peso
				if(visitado[v] == false){
					if(dijkstra[v].peso == "inf" || dijkstra[v].peso > w + dijkstra[u].peso){
						dijkstra[v].peso = w
						dijkstra[v].pai = u			
						cont.push({vertice: v, peso: w})			
					}
				}
				
			}
			h.hs(cont)
		}

		return dijkstra
}

module.exports = {dijkstra}