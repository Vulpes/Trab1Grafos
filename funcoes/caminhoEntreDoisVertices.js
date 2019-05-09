const caminho = (grafo, rep, vert1, vert2, tipoBusca)=>{
    let caminho = []
    if(tipoBusca == 1){
		      
        for(var i = 0; i < grafo.quantidade; i++){

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
      for(let i = 0; i < grafo.quantidade; i++){
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

module.exports = {
    caminho
}