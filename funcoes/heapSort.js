const h = require('./heapRoot')
const s = require('./swap')
const hs = (entrada)=>{
    let array_length = entrada.length;

	    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1){
	        h.hr(entrada, i, array_length);
	      }

	    for (i = entrada.length - 1; i > 0; i--) {
	        s.swap(entrada, 0, i);
	        array_length--;
	        h.hr(entrada, 0, array_length);
}
}
module.exports = {hs}