/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    const graph = new Map();
    const inDegree = new Map();

    for (let i = 0; i < recipes.length; i++) {
        inDegree.set(recipes[i], ingredients[i].length);
        
        for (let ing of ingredients[i]) {
            if (!graph.has(ing)) {
                graph.set(ing, []);
            }
            graph.get(ing).push(recipes[i]);
        }
    }

    const queue = [...supplies];
    const result = [];

    while (queue.length > 0) {
        const item = queue.shift();

        if (graph.has(item)) {
            for (let recipe of graph.get(item)) {
                inDegree.set(recipe, inDegree.get(recipe) - 1);
                if (inDegree.get(recipe) === 0) {
                    queue.push(recipe);
                    result.push(recipe);
                }
            }
        }
    }

    return result;
};