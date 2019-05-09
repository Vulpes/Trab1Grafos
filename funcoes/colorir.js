const colorir = (lista,vertice)=>{
    if(lista[vertice].cor != 'incolor') return lista
    let cores = ['#7CFF22', '#E8AC0F', '#FF3D1E', '#910FE8', '#0498FF', '#FF118D', '#00FF54', '#E8C60F', '#FF3D1E', '#11FFCB']
    let contCor = 0
    let temCor = true
    while(temCor){
        temCor = false
        lista[vertice].cor = cores[contCor]
        for(let i = 0; lista[vertice].adj[i] != undefined; i++){
            let verticeEscolhido = lista[vertice].adj[i].vertice
            if(cores[contCor] == lista[verticeEscolhido].cor) {
                temCor = true
                contCor++
            }
        }
    }
    for(let i = 0; lista[vertice].adj[i] != undefined; i++) this.colorir(lista, lista[vertice].adj[i].vertice)
    return lista
}

module.exports = {colorir}