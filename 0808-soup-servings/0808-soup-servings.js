/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  if (n >= 5000) return 1.0;

  const m = Math.ceil(n / 25);

  const memo = Array.from({ length: m + 1 }, () => Array(m + 1).fill(undefined));

  function dfs(i, j) {
    if (i <= 0 && j <= 0) return 0.5;
    if (i <= 0) return 1.0;
    if (j <= 0) return 0.0;

    const cached = memo[i][j];
    if (cached !== undefined) return cached;

    const res =
      0.25 *
      (dfs(i - 4, j) +
        dfs(i - 3, j - 1) +
        dfs(i - 2, j - 2) +
        dfs(i - 1, j - 3));

    memo[i][j] = res;

    return res;
  }

  return dfs(m, m);
};