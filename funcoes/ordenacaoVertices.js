const ordenacaoV = (grafo,verticeEscolhido)=>{
        let lista = grafo.representacao
		let backtracking = [];
		let buscaProf = [];
		let arrayVertices = [];
		let pilha = []


		//Criação de uma lista de array contendo todos os vertices diferentes do
		//vertice escolhido pelo usuário
		for(var i = 0; i < grafo.quantidade; i++) {
		    if(verticeEscolhido != i) arrayVertices.push(i);
		}
		/*Estrutura auxiliar de array bidimensional contendo na primeira posição da
		segunda dimensão um objeto tendo cor, tempo da primeira passagem,
		tempo da segunda passagem e antecessor. Na segunda posição da mesma dimensão a grafo*/
		for(var i = 0; i < grafo.quantidade; i++){
		    buscaProf[i] = {
		    	cor: "branco",
		    	adj: lista[i]
		    }
		}

		    
		while(arrayVertices.length > 0){

		    if(buscaProf[verticeEscolhido].cor == "branco"){

		    	buscaProf[verticeEscolhido].cor = "cinza"
		    	backtracking.push(verticeEscolhido);
                let verticeSecundario

		    	while(backtracking.length > 0){

		    		if(buscaProf[verticeEscolhido].adj.length > 0){
                        verticeSecundario = buscaProf[verticeEscolhido].adj.shift().vertice;

		    		if(buscaProf[verticeSecundario].cor == "branco"){
                        buscaProf[verticeSecundario].cor = "cinza"		    					
		    			backtracking.push(verticeEscolhido)
		    			verticeEscolhido = verticeSecundario
		    		}
                    }
		    		else{
		    			pilha.unshift(verticeEscolhido)
		    			buscaProf[verticeEscolhido].cor = "preto"		    				
		    			verticeEscolhido = backtracking.pop()
                    }
		    	}

		    }
		    	verticeEscolhido = arrayVertices.shift();
		    }
		    
		    return pilha
}

module.exports = {
    ordenacaoV
}