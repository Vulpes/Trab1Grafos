const s = require('./swap')
const hr = (entrada,i,array_length)=>{
    var left = 2 * i + 1;
	var right = 2 * i + 2;
	var max = i;

	if (left < array_length && entrada[left].peso > entrada[max].peso) {
	    max = left;
	}

	if (right < array_length && entrada[right].peso > entrada[max].peso)     {
	    max = right;
	}

	if (max != i) {
	    s.swap(entrada, i, max);
	    this.hr(entrada, max);
	}
}

module.exports = {
    hr
}