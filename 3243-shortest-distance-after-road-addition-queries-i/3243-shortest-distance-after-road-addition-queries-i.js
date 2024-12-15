/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
  const answer = [];

  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n - 1; i++) {
    graph[i].push(i + 1); 
  }

  const bfs = () => {
    const distances = Array(n).fill(Infinity);
    distances[0] = 0;
    const queue = [0];

    while (queue.length > 0) {
      const current = queue.shift();
      for (const neighbor of graph[current]) {
        if (distances[neighbor] > distances[current] + 1) {
          distances[neighbor] = distances[current] + 1;
          queue.push(neighbor);
        }
      }
    }

    return distances[n - 1];
  };

  for (const [u, v] of queries) {
    graph[u].push(v);  
    answer.push(bfs());
  }

  return answer;
};