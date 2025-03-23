/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
    const graph = Array(n).fill().map(() => []);

    for (const [u, v, time] of roads) {
        graph[u].push([v, time]);
        graph[v].push([u, time]);
    }

    const distances = Array(n).fill(Infinity);
    distances[0] = 0;

    const ways = Array(n).fill(0);
    ways[0] = 1;

    const visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        let minDistance = Infinity;
        let minNode = -1;

        for (let j = 0; j < n; j++) {
            if (!visited[j] && distances[j] < minDistance) {
                minDistance = distances[j];
                minNode = j;
            }
        }

        if (minNode === -1) break;
        visited[minNode] = true;

        for (const [neighbor, time] of graph[minNode]) {
            const newDistance = distances[minNode] + time;

            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                ways[neighbor] = ways[minNode];
            }
            else if (newDistance === distances[neighbor]) {
                ways[neighbor] = (ways[neighbor] + ways[minNode]) % (1e9 + 7);
            }
        }
    }

    return ways[n - 1];
};