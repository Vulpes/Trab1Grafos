const swap = (input, index_A, index_B)=> {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

module.exports = {swap}