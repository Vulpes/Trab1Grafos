const caminhoMF = (grafo) =>{
    let matriz = grafo.representacao
	for(let i = 0; i < grafo.quantidade; i++){
    }
	  for(let i = 0; i < grafo.quantidade; i++) matriz[i][i] = 0

		for(let k = 1; k < grafo.quantidade; k++){
			for(let i = 1; i < grafo.quantidade; i++){
				for(let j = 1; j < grafo.quantidade; j++){
					if((matriz[i][k] != "inf" && matriz[k][j] != "inf") || matriz[i][j] != "inf"){
						if(matriz[i][j] != "inf"){
							if(matriz[i][k] + matriz[k][j] < matriz[i][j]) matriz[i][j] = matriz[i][k] + matriz[k][j]
								
						}
						else matriz[i][j] = matriz[i][k] + matriz[k][j]				
						
					}
				}
			}
		}

		return matriz
}

module.exports = {
    caminhoMF
}

