const comp = (grafo,arrayVertices, transposto)=>{
    var lista = transposto
		let quantVertice = grafo.quantidade
		let verticeEscolhido
		let backtracking = [];
		let buscaProf = [];
        let tempo = 0;
        let conexo = []

		    
		    /*Estrutura auxiliar de array bidimensional contendo na primeira posição da
		    segunda dimensão um objeto tendo cor, tempo da primeira passagem,
		    tempo da segunda passagem e antecessor. Na segunda posição da mesma dimensão a grafo*/
		    for(var i = 0; i < quantVertice; i++){
		    	buscaProf[i] = {
		    		cor: "branco",
		    		tempoInicial: "indef",
		    		tempoFinal: "indef",
		    		antecessor: "indef",
		    		adj: lista[i]
		    	}	    	

		    }
			
		    while(arrayVertices.length > 0){
		    	var conjuntoConexo = []
		    	verticeEscolhido = arrayVertices.shift();
		    	if(buscaProf[verticeEscolhido].cor == "branco"){

		    		buscaProf[verticeEscolhido].cor = "cinza"
		    		buscaProf[verticeEscolhido].tempoInicial = ++tempo
		    		buscaProf[verticeEscolhido].antecessor = null

		    		backtracking.push(verticeEscolhido);

		    		var verticeSecundario

		    		while(backtracking.length > 0){

		    			if(buscaProf[verticeEscolhido].adj.length > 0){

		    				verticeSecundario = buscaProf[verticeEscolhido].adj.shift().vertice;

		    				if(buscaProf[verticeSecundario].cor == "branco"){

		    					buscaProf[verticeSecundario].cor = "cinza"
		    					buscaProf[verticeSecundario].tempoInicial = ++tempo
		    					buscaProf[verticeSecundario].antecessor = verticeEscolhido
		    					backtracking.push(verticeEscolhido)
		    					verticeEscolhido = verticeSecundario
		    				}


		    			}
		    			else{
		    				buscaProf[verticeEscolhido].cor = "preto"
		    				buscaProf[verticeEscolhido].tempoFinal = ++tempo
		    				conjuntoConexo.push(verticeEscolhido)
		    				buscaProf[verticeEscolhido].antecessor = backtracking.pop()
		    				verticeEscolhido = buscaProf[verticeEscolhido].antecessor
		    			}
		    		}

		    	}
		    	
		    	if(conjuntoConexo.length > 0) { conexo.push(conjuntoConexo) }
		    }

		    return conexo;
}

module.exports = {
    comp
}