const grafo = (qNos, arquivo, tipo)=>{
    let grafos = {
         quantidade: qNos,
         arq: arquivo,
         tipo: tipo,
         representacao: null,
         tipoRepresentacao: null
        }
        return grafos
    }
    
module.exports = {
    grafo
}