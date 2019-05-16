class Grafo{
    //construtor da classe grafo
    constructor(qNos, arquivo, tipo){
        this.quantidade = qNos
        this.arq = arquivo
        this.tipo = tipo
        this.rep = null
		this.trep = null
    }
    //gets para pegar dados específicos das classes
    getQNos(){ return this.quantidade }
    getArquivo(){ return this.grafo }
    getTipo(){ return this.tipo }
    getRepresentacao() { return this.rep }
    getArestas() {
		
		if(this.trep === 1){
			let arestas = []
			let quantVertice = this.getQNos()
			let lista = this.getRepresentacao()

			for(var i = 0; i < quantVertice; i++){
				let cont = 1
				let a = lista[i][0]
				while(a){
					var obj = {
						vertice1: i,
						vertice2: a.vertice,
						peso: a.peso
					}
					arestas.push(obj)
					a = lista[i][cont]
					cont++
				}
			}
			return arestas
		}
		else {
			let arestas = []
			let quantVertice = this.getQNos()
			let matriz = this.getRepresentacao()

			for(var i = 0; i < quantVertice; i++){
				for(var j = 0; j < quantVertice; j++){
					if(matriz[i][j] != "inf"){
						var obj = {
							vertice1: i,
							vertice2: j,
							peso: matriz[i][j]
						}
						arestas.push(obj)
					}
				}
			}

			return arestas
		}
    }
    //-----buscas, sendo a busca em profundidade e a busca em largura------
    getBuscaProfundidade(verticeEscolhido) {
		if(this.trep == 1) {
			let lista = this.getRepresentacao()
			let quantVertice = this.getQNos()
			let principal = verticeEscolhido
			let backtracking = [];
			let buscaProf = [];
			let arrayVertices = [];
			let tempo = 0;

		    //Criação de uma lista de array contendo todos os vertices diferentes do
		    //vertice escolhido pelo usuário
		    for(let i = 0; i < quantVertice; i++) {
		    	if(verticeEscolhido != i) arrayVertices.push(i);
		    }
		    /*Estrutura auxiliar de array bidimensional contendo na primeira posição da
		    segunda dimensão um objeto tendo cor, tempo da primeira passagem,
		    tempo da segunda passagem e antecessor. Na segunda posição da mesma dimensão a grafo*/
		    for(let i = 0; i < quantVertice; i++){
		    	buscaProf[i] = {
		    		cor: "branco",
		    		tempoInicial: "indef",
		    		tempoFinal: "indef",
		    		antecessor: "indef",
		    		adj: lista[i]
		    	}
		    }
            while(arrayVertices.length > 0){

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
		    				verticeEscolhido = backtracking.pop()

		    			}
		    		}

		    	}
		    	verticeEscolhido = arrayVertices.shift();
		    }

		    buscaProf[principal].antecessor = null

		    return buscaProf;
		}
		else {
			let matriz = this.getRepresentacao()
			let quantVertice = this.getQNos()
			let principal = verticeEscolhido
			let backtracking = []
			let buscaProf = []
			let arrayVertices = []
			let tempo = 0

			for(let i = 0; i < quantVertice; i++) {
				if(verticeEscolhido != i) arrayVertices.push(i);
			}

			for(let j = 0; j < quantVertice; j++){
				var obj = {
					cor: "branco",
					tempoInicial: "indef",
					tempoFinal: "indef",
					antecessor: "indef"
				}
				buscaProf[j] = obj
			}
            //contador de vertices, recebe a quantidade de vértices - 1, para ir até o penúltimo na busca
			let contVert = quantVertice - 1

			while(contVert > 0){
				if(buscaProf[verticeEscolhido].cor == "branco"){
					buscaProf[verticeEscolhido].cor = "cinza"
					buscaProf[verticeEscolhido].tempoInicial = ++tempo
					buscaProf[verticeEscolhido].antecessor = null

					backtracking.push(verticeEscolhido)

					var verticeSecundario


					while(backtracking.length > 0){

						for(verticeSecundario = 0; verticeSecundario < quantVertice; verticeSecundario++){
							if(matriz[verticeEscolhido][verticeSecundario] != "inf"){
								if(buscaProf[verticeSecundario].cor == "branco"){
									buscaProf[verticeSecundario].cor = "cinza"
									buscaProf[verticeSecundario].tempoInicial = ++tempo
									buscaProf[verticeSecundario].antecessor = verticeEscolhido

									backtracking.push(verticeEscolhido)
									verticeEscolhido = verticeSecundario
									break
								}
							}
						}

						if(verticeSecundario == quantVertice){
							buscaProf[verticeEscolhido].cor = "preto"
							buscaProf[verticeEscolhido].tempoFinal = ++tempo
							verticeEscolhido = backtracking.pop()
						}

					}
				}

				verticeEscolhido = arrayVertices.shift();
				contVert--
			}

			buscaProf[principal].antecessor = null
			return buscaProf
		}
    }
    getBuscaLargura(noEscolhido) {
		let quantVertice = this.getQNos()
		if(this.trep == 0){
			
			let matriz = this.representacao
			let fila = []
		    let matrizBusca = []
		    let aux = noEscolhido

		    for(let j = 0; j < quantVertice; j++){
		      let obj = {
		          cor: "branco",
		          distancia: "inf",
		          pai: "indef"

		      }
		      matrizBusca[j] = obj
		    }

		    matrizBusca[noEscolhido].cor = "cinza"
		    matrizBusca[noEscolhido].distancia = 0

		    let cont = 1
		    fila.push(noEscolhido)
		    let verticeSecundario

		    while(cont > 0){
		      noEscolhido = fila.shift()
		      cont--
		      for(verticeSecundario = 0; verticeSecundario < quantVertice; verticeSecundario++){ 
		        if(matriz[noEscolhido][verticeSecundario] != "inf"){      
		          if(matrizBusca[verticeSecundario].cor == "branco"){
		            matrizBusca[verticeSecundario].cor = "cinza"
		            matrizBusca[verticeSecundario].distancia = matrizBusca[noEscolhido].distancia + 1
		            matrizBusca[verticeSecundario].pai = noEscolhido
		            fila.push(verticeSecundario)
		            cont++
		          }
		        }
		        
		      }

		      matrizBusca[noEscolhido].cor = "preto"
		    }
		    matrizBusca[aux].pai = null
		    return matrizBusca
		}
		else {
			var lista = this.representacao
			var fila = []
		    var listaBusca = []
		    var aux = noEscolhido
		    for(var i = 0; i < quantVertice; i++){
		        var obj = {
		            cor: "branco",
		            distancia: "inf",
		            pai: "indef"
		        }

		        listaBusca[i] = [];
		        listaBusca[i].push(obj);
		        listaBusca[i].push(lista[i]);
		    }

		    listaBusca[noEscolhido][0].cor = "cinza"
		    listaBusca[noEscolhido][0].distancia = 0

		    fila.push(noEscolhido)


		    while(fila.length !== 0){
		        var vertice = fila.shift()
		        for(var i = 0; listaBusca[vertice][1][i] != null; i++){
		            var vertAdj = listaBusca[vertice][1][i].vertice
		            if(listaBusca[vertAdj][0].cor == "branco"){
		                listaBusca[vertAdj][0].cor = "cinza"
		                listaBusca[vertAdj][0].distancia = listaBusca[vertice][0].distancia + 1
		                listaBusca[vertAdj][0].pai = vertice
		                fila.push(vertAdj)
		            }
		        }
		        listaBusca[vertice][0].cor = "preto"
		    }
		    listaBusca[aux][0].pai = null
		    var retorno = []
		    for(var i = 0; i < quantVertice; i++) retorno.push(listaBusca[i][0])
		    return retorno
		}
    }
    //Caminho entre dois Vértices
    getCaminhoEN(rep, vert1, vert2, tipoBusca) {
		var quantVertice = this.getQNos()
		var caminho = []
		if(tipoBusca == 1){
		      
		      for(var i = 0; i < quantVertice; i++){

		          var pai = rep[vert2].pai;	

		          if(pai == vert1) return caminho.reverse()
		          else if(pai == "indef") break
		          else if (pai == null) return "false"
		          else{
		              caminho.push(pai)
		              vert2 = pai
		          }
		      }

		      return "false";
		}
		else{
			for(let i = 0; i < quantVertice; i++){
				let ant = rep[vert2].antecessor
				if(ant == vert1) return caminho
		          else if(ant == "indef") break
		          else if (ant == null) return "false"
		          else{
		              caminho.push(ant)
		              vert2 = ant
		          }
			}
		}
    }
    //seters, basicamente modificam a representação, permitindo saber se é lista ou se é matriz
    setRepresentacao(representacao, tp) { 
		this.rep = representacao
		this.trep = tp
	}

	setRep(representacao){
		this.rep = representacao
	}
    //fim da classe grafo, a qual será a classe pai das demais
}

class Matriz extends Grafo{
    constructor(qNos, arquivo, tipo){
		super(qNos, arquivo, tipo)
		var quantVertice = qNos
		var arquivoLido = arquivo
		if(tipo == 0) {			

			var matriz = [quantVertice]; // Criação de uma matriz unidimensional
			for(var i = 0; i <quantVertice; i++){
				matriz[i] = [quantVertice];
				for(var j = 0; j < quantVertice; j++) matriz[i][j] = "inf";
			}

		    //Montagem da Matriz
		    while(arquivoLido.length){
		    	var linha = arquivoLido.shift();
		    	linha = linha.split(' ');
		    	var verIni = parseInt(linha.shift());
		    	var verFin = parseInt(linha.shift());
		    	var peso = parseInt(linha.shift());
		    	matriz[verFin][verIni] = peso;
		    	matriz[verIni][verFin] = peso;

		    }
		    this.setRepresentacao(matriz, 0)

		}
		else {			

			var matriz = [quantVertice]; // Criação de uma matriz unidimensional
		    //Inicializando a Matriz colocando 0 em todas as posições
		    for(var i = 0; i <quantVertice; i++){
		    	matriz[i] = [quantVertice];
		    	for(var j = 0; j < quantVertice; j++) matriz[i][j] = "inf";
		    }
		    //Montagem da Matriz
		    while(arquivoLido.length){
		    	var linha = arquivoLido.shift();
		    	linha = linha.split(' ');
		    	var verIni = parseInt(linha.shift());
		    	var verFin = parseInt(linha.shift());
		    	var peso = parseInt(linha.shift());
		    	matriz[verIni][verFin] = peso;

		    }
		    this.setRepresentacao(matriz, 0)
		}
	}
 
}

class Lista extends Grafo {
	constructor(qNos, arquivo, tipo){
		super(qNos, arquivo, tipo)
		var quantVertice = qNos
		var arquivoLido = arquivo
		if(tipo == 0){
			var lista = [quantVertice]; //Criando a lista
		    //Criação de um array em cada posição
		    for(var i = 0; i < quantVertice; i++) lista[i] = [];
		    	var i = 0;
		    //Armazenamento dos dados
		    while(arquivoLido.length){
		    	var linha = arquivoLido.shift();
		    	linha = linha.split(' ');
		    	var verIni = parseInt(linha.shift());
		    	var verFin = parseInt(linha.shift());
		    	var peso = parseInt(linha.shift());

		    	var obj = {
		    		vertice: verFin,
		    		peso: peso
		    	}

	    		lista[verIni].push(obj);

	    		var obj2 = {
	    			vertice: verIni,
	    			peso: peso
	    		}

    			lista[verFin].push(obj2);
    		}

    		this.setRepresentacao(lista, 1)
    	}
    	else {
    		var lista = [];
    		for(var i = 0; i < quantVertice; i++) lista[i] = [];

			while(arquivoLido.length){
				var linha = arquivoLido.shift();
				linha = linha.split(' ');
				var verIni = parseInt(linha.shift());
				var verFin = parseInt(linha.shift());
				var peso = parseInt(linha.shift());

				var obj = {
					vertice: verFin,
					peso: peso};

					lista[verIni].push(obj);
			}
			this.setRepresentacao(lista, 1)
		}
    }
    getTransposto(){
		let lista = this.getRepresentacao()
		let quantVertice = this.getQNos()
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
    
    getComponents(arrayVertices, transposto){
        let lista = transposto
        let quantVertice = this.getQNos()
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
//codigos auxiliares, os quais vão facilitar as demais implementações
heap_root(input, i, array_length) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left].peso > input[max].peso) {
        max = left;
    }

    if (right < array_length && input[right].peso > input[max].peso)     {
        max = right;
    }

    if (max != i) {
        this.swap(input, i, max);
        this.heap_root(input, max);
    }
}

swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

heapSort(input) {
    let array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1){
        this.heap_root(input, i, array_length);
      }

    for (i = input.length - 1; i > 0; i--) {
        this.swap(input, 0, i);
        array_length--;
        this.heap_root(input, 0, array_length);
    }
}
//prim e kruskal
getPrim(){
    let verticeEscolhido = 0
    let lista = this.getRepresentacao()
    let quantVertice = this.getQNos()
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
        this.heapSort(cont)
    }

    return prim
}
getKruskal(){
    let verticeEscolhido = 0
    let lista = this.getRepresentacao()
    let aresta = this.getArestas()
    console.log(aresta)
}
//dijkstra e belmond-ford
getDijkstra(verticeEscolhido){
    let lista = this.getRepresentacao()
    let quantVertice = this.getQNos()
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
        this.heapSort(cont)
    }

    return dijkstra
}
}
