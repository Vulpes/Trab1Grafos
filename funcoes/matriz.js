const grafo = require('../CriaGrafo')
const repp = require('./representacao')

const matriz = (qNos, arquivo,tipo)=>{
    let m = grafo.grafo(qNos,arquivo,tipo)
    if(tipo == 0) {			

        var matriz = [qNos]; // Criação de uma matriz unidimensional
        for(var i = 0; i <qNos; i++){
            matriz[i] = [qNos];
            for(var j = 0; j < qNos; j++) matriz[i][j] = "inf";
        }

        //Montagem da Matriz
        while(arquivo.length){
            var linha = arquivo.shift();
            linha = linha.split(' ');
            var verIni = parseInt(linha.shift());
            var verFin = parseInt(linha.shift());
            var peso = parseInt(linha.shift());
            matriz[verFin][verIni] = peso;
            matriz[verIni][verFin] = peso;

        }
        m = repp.rep(m,matriz,0)
        

    }
    else {			

        var matriz = [qNos]; // Criação de uma matriz unidimensional
        //Inicializando a Matriz colocando 0 em todas as posições
        for(var i = 0; i <qNos; i++){
            matriz[i] = [qNos];
            for(var j = 0; j < qNos; j++) matriz[i][j] = "inf";
        }
        //Montagem da Matriz
        while(arquivo.length){
            var linha = arquivo.shift();
            linha = linha.split(' ');
            var verIni = parseInt(linha.shift());
            var verFin = parseInt(linha.shift());
            var peso = parseInt(linha.shift());
            matriz[verIni][verFin] = peso;

        }
        m = repp.rep(m,matriz,0)
    }
    return m
}

module.exports = {
    matriz
}


