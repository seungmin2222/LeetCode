/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let totalGas = 0, totalCost = 0;
  let startIndex = 0, tank = 0;
  
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];
    
    if (tank < 0) {
      startIndex = i + 1;
      tank = 0;
    }
  }

  return totalGas < totalCost ? -1 : startIndex;
};