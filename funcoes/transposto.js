const transp = (grafo)=>{
    let lista = grafo.representacao
	let quantVertice = grafo.quantidade
	let transposto = []
	for(var i = 0; i < quantVertice; i++) transposto[i] = [];
	for(let i = 0; i < quantVertice; i++){
		for(let j = 0; lista[i][j] != undefined; j++){
			let obj = {
				vertice: i,
				peso: lista[i][j].peso
			}
			transposto[lista[i][j].vertice].push(obj)
			}
		}

		return transposto
}

module.exports = {
    transp
}