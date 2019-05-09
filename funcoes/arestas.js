const arestas = (grafo)=>{
   if(grafo.tipoRepresentacao===1){
    let arestas = []
    let lista = grafo.representacao

    for(var i = 0; i < grafo.quantidade; i++){
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
        return arestas
    }
}
    else {
        let arestas = []
        let matriz = grafo.representacao

        for(var i = 0; i < grafo.quantidade; i++){
            for(var j = 0; j < grafo.quantidade; j++){
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

module.exports= {
      arestas
}
  