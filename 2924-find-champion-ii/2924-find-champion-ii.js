/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    const inDegree = Array(n).fill(0);

    for (let [u, v] of edges) {
        inDegree[v]++;
    }

    const potentialChampions = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            potentialChampions.push(i);
        }
    }

    return potentialChampions.length === 1 ? potentialChampions[0] : -1;
};
