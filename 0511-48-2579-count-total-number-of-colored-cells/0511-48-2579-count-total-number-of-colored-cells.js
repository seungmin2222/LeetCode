var coloredCells = function(n) {
    if (n === 1) return 1;

    return 1 + 4 * ((n - 1) * n / 2);
};