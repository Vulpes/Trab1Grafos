const rep = (grafo, representacao, tipoRepresentacao)=>{
    grafo.representacao = representacao
    grafo.tipoRepresentacao = tipoRepresentacao
    return grafo
}
const alterRep = (grafo,representacao)=>{
    grafo.representacao = representacao
    return grafo
}
module.exports = {
    rep,alterRep
}