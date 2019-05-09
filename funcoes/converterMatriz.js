const rep = require('./representacao')
const conv = (matriz) =>{
    let quantVertice = matriz.quantidade
		let lista = [quantVertice]
	 	for(var i = 0; i < quantVertice; i++) lista[i] = [];

 		for(let i = 0; i < quantVertice; i++){
 			for(let j = 0; j < quantVertice; j++){
 				if(matriz[i][j] != "inf"){
 					var obj = {
						vertice: j,
						peso: matriz[i][j]
					}
					lista[i].push(obj)
 				}
 			}
 		}
 		rep.alterRep(matriz,lista)
}

module.exports = [conv]