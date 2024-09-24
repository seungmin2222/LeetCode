/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = {}; 
  const visited = new Array(numCourses).fill(0);

  for (let [course, prereq] of prerequisites) {
    if (!graph[course]) graph[course] = [];
    graph[course].push(prereq);
  }

  const dfs = (course) => {
    if (visited[course] === 1) return true;
    if (visited[course] === 2) return false;

    visited[course] = 1;

    if (graph[course]) {
      for (let prereq of graph[course]) {
        if (dfs(prereq)) return true;
      }
    }

    visited[course] = 2;
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }

  return true;
};
