/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    const graph = new Array(n).fill().map(() => []);
    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = new Array(n).fill(false);

    function dfs(node) {
        const component = [];
        const stack = [node];
        visited[node] = true;

        while (stack.length > 0) {
            const current = stack.pop();
            component.push(current);

            for (let neighbor of graph[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }

        return component;
    }

    function isComplete(component) {
        const size = component.length;
        const edgesInComponent = new Set();

        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < size; j++) {
                const a = component[i], b = component[j];
                if (graph[a].includes(b)) {
                    edgesInComponent.add(`${Math.min(a, b)}-${Math.max(a, b)}`);
                }
            }
        }

        const expectedEdges = size * (size - 1) / 2;
        return edgesInComponent.size === expectedEdges;
    }

    let completeComponentsCount = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const component = dfs(i);
            if (isComplete(component)) {
                completeComponentsCount++;
            }
        }
    }

    return completeComponentsCount;
};