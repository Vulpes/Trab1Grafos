

const maiorGrau = (grafo)=>{
	
    let lista = grafo.representacao
	let maior
	let valorMaior = 0
	let quantVertice = grafo.quantidade
	for(let i = 0; i < quantVertice; i++){
		let j = 0
		for(; lista[i][j] != undefined; j++)
		    if(j > valorMaior) {
			   maior = i
			   valorMaior = j
			}
		}
	console.log(maior)
	return maior
}
module.exports = {
    maiorGrau
}