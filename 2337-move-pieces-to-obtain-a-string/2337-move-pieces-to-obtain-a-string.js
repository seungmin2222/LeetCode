/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
  const sWithoutUnderscore = start.split("_").join("");
  const tWithoutUnderscore = target.split("_").join("");

  if (sWithoutUnderscore !== tWithoutUnderscore) return false;

  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < start.length && tIndex < target.length) {
    while (sIndex < start.length && start[sIndex] === '_') sIndex++;
    while (tIndex < target.length && target[tIndex] === '_') tIndex++;

    if (sIndex === start.length || tIndex === target.length) break;

    if (start[sIndex] !== target[tIndex]) return false;

    if (start[sIndex] === 'L' && sIndex < tIndex) return false;
    if (start[sIndex] === 'R' && sIndex > tIndex) return false;

    sIndex++;
    tIndex++;
  }

  return true;
};
