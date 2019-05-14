const grafo = require('../CriaGrafo')
const repp = require('./representacao')

const lista = (qNos, arquivo,tipo)=>{
    let l = grafo.grafo(qNos,arquivo,tipo)
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

    		l = repp.rep(l,lista,1)
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
            l = repp.rep(l,lista,1)
        }
    return l
}

module.exports = {
    lista
}