const topologica = require('./ordenacaoTopologica')

const cmgao = (grafo,verticeEscolhido)=>{
   let pilhaTopologica = topologica.ordenacao(grafo,verticeEscolhido)
   let cm = []
   for(let i = 0; i < grafo.quantidade; i++){
    let obj = {
        peso: "inf",
        pai: null
    }
    cm[i] = obj
   }		
    for(let i = 0; i < grafo.quantidade; i++){
       for(let j = 0; pilhaTopologica[i].adj[j] != undefined; j++){
         let vertice = pilhaTopologica[i].vertice
         let verticeAdj = pilhaTopologica[i].adj[j].vertice
        
        if(cm[verticeAdj].peso == "inf" || cm[verticeAdj].peso > pilhaTopologica[i].adj[j].peso){
            cm[verticeAdj].peso = pilhaTopologica[i].adj[j].peso
            cm[verticeAdj].pai = vertice
        }
    }
}
return cm
}

module.exports = {
    cmgao
}