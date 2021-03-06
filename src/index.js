module.exports = function solveEquation(equation) {
    var numbers = equation.match(/(-?|\+\s|-\s)[^\^][0-9]+/g).map(function(item) {
        return Number(item.replace(/\s/g, ''));

    });
    var D = Math.pow(b, 2) - 4 * a * c;
    var first = (-b + Math.sqrt(D)) / (2 * a);
    var second = (-b - Math.sqrt(D)) / (2 * a);
    var result = [Math.round(first), Math.round(round)];
    return result.sort(function(a, b) {
        return a - b;
    })
}