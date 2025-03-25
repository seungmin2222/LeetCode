/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 1;
    let right = Math.min(...ranks) * cars * cars;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (canRepairAllCars(ranks, cars, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

function canRepairAllCars(ranks, totalCars, time) {
    let carsRepaired = 0;
    
    for (const rank of ranks) {
        const carsThisMechanicCanRepair = Math.floor(Math.sqrt(time / rank));
        carsRepaired += carsThisMechanicCanRepair;
        
        if (carsRepaired >= totalCars) {
            return true;
        }
    }
    
    return false;
}