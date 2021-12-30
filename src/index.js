
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) { return []; }
    return [].concat(...matrix.map((array, index) => index % 2 == 0 ? array : array.reverse()));
}
