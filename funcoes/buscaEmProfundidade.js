const bep = (verticeEscolhido, grafo)=>{
    if(this.tipoRepresentacao == 1) {
        let lista = grafo.representacao
        var principal = verticeEscolhido
        var backtracking = []
        var buscaProf = []
        var arrayVertices = []
        var tempo = 0

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
        let matriz = grafo.representacao
        let principal = verticeEscolhido
        let backtracking = []
        let buscaProf = []
        let arrayVertices = []
        let tempo = 0

        for(var i = 0; i < grafo.quantidade; i++) {
            if(verticeEscolhido != i) arrayVertices.push(i);
        }

        for(var j = 0; j < grafo.quantidade; j++){
            var obj = {
                cor: "branco",
                tempoInicial: "indef",
                tempoFinal: "indef",
                antecessor: "indef"
            }
            buscaProf[j] = obj
        }

        var contVert = grafo.quantidade - 1

        while(contVert > 0){
            if(buscaProf[verticeEscolhido].cor == "branco"){
                buscaProf[verticeEscolhido].cor = "cinza"
                buscaProf[verticeEscolhido].tempoInicial = ++tempo
                buscaProf[verticeEscolhido].antecessor = null

                backtracking.push(verticeEscolhido)

                var verticeSecundario


                while(backtracking.length > 0){

                    for(verticeSecundario = 0; verticeSecundario < grafo.quantidade; verticeSecundario++){
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

                    if(verticeSecundario == grafo.quantidade){
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

module.exports = {
    bep
}
