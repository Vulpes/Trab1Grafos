const ordenacao = (grafo,verticeEscolhido)=>{
           const lista = grafo.representacao
			var principal = verticeEscolhido
			var backtracking = []
			var buscaProf = []
			var arrayVertices = []
			var tempo = 0
			var pilhaTopologica = []

		    //Criação de uma lista de array contendo todos os vertices diferentes do
		    //vertice escolhido pelo usuário
		    for(var i = 0; i < grafo.quantidade; i++) {
		    	if(verticeEscolhido != i) arrayVertices.push(i);
		    }
		    /*Estrutura auxiliar de array bidimensional contendo na primeira posição da
		    segunda dimensão um objeto tendo cor, tempo da primeira passagem,
		    tempo da segunda passagem e antecessor. Na segunda posição da mesma dimensão a grafo*/
		    for(var i = 0; i < grafo.quantidade; i++){
		    	var obj = {
		    		cor: "branco",
		    		tempoInicial: "indef",
		    		tempoFinal: "indef",
		    		antecessor: "indef"
		    	}

		    	buscaProf[i] = []
		    	buscaProf[i].push(obj)
		    	buscaProf[i].push(lista[i])
		    }


		    while(arrayVertices.length > 0){

		    	if(buscaProf[verticeEscolhido][0].cor == "branco"){

		    		buscaProf[verticeEscolhido][0].cor = "cinza"
		    		buscaProf[verticeEscolhido][0].tempoInicial = ++tempo
		    		buscaProf[verticeEscolhido][0].antecessor = null

		    		backtracking.push(verticeEscolhido);

		    		var verticeSecundario
		    		var cont = 0
		    		while(backtracking.length > 0){

		    			if(buscaProf[verticeEscolhido][1][cont] != undefined){

		    				verticeSecundario = buscaProf[verticeEscolhido][1][cont];
		    				cont++

		    				if(buscaProf[verticeSecundario.vertice][0].cor == "branco"){

		    					buscaProf[verticeSecundario.vertice][0].cor = "cinza"
		    					buscaProf[verticeSecundario.vertice][0].tempoInicial = ++tempo
		    					buscaProf[verticeSecundario.vertice][0].antecessor = verticeEscolhido
		    					backtracking.push(verticeEscolhido)
		    					verticeEscolhido = verticeSecundario.vertice
		    				}


		    			}
		    			else{
		    				buscaProf[verticeEscolhido][0].cor = "preto"
		    				let obj = {
		    					vertice: verticeEscolhido,
		    					adj: lista[verticeEscolhido]
		    				}
		    				pilhaTopologica.unshift(obj)
		    				buscaProf[verticeEscolhido][0].tempoFinal = ++tempo
		    				buscaProf[verticeEscolhido][0].antecessor = backtracking.pop()
		    				verticeEscolhido = buscaProf[verticeEscolhido][0].antecessor
		    				cont = 0
		    			}
		    		}

		    	}
		    	verticeEscolhido = arrayVertices.shift();
		    }

		    buscaProf[principal][0].antecessor = null

		    return pilhaTopologica;
}

module.exports = {
    ordenacao
}