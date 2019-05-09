const bel = (noEscolhido,grafo)=>{
        var quantVertice = grafo.quantidade
		if(grafo.tipoRepresentacao == 0){
			
			var matriz = grafo.representacao
			var fila = []
		    var matrizBusca = []
		    var aux = noEscolhido

		    for(var j = 0; j < quantVertice; j++){
		      var obj = {
		          cor: "branco",
		          distancia: "inf",
		          pai: "indef"

		      }
		      matrizBusca[j] = obj
		    }

		    matrizBusca[noEscolhido].cor = "cinza"
		    matrizBusca[noEscolhido].distancia = 0

		    var cont = 1
		    fila.push(noEscolhido)
		    var verticeSecundario

		    while(cont > 0){
		      noEscolhido = fila.shift()
		      cont--
		      for(verticeSecundario = 0; verticeSecundario < quantVertice; verticeSecundario++){ 
		        if(matriz[noEscolhido][verticeSecundario] != "inf"){      
		          if(matrizBusca[verticeSecundario].cor === "branco"){
		            matrizBusca[verticeSecundario].cor === "cinza"
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
			var lista = grafo.representacao
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
		    var solucao = []
		    for(var i = 0; i < quantVertice; i++) solucao.push(listaBusca[i][0])
		    return solucao
        }
    }

module.exports = {
    bel
}