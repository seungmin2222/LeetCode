# [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)

이 문제는 주어진 재료와 레시피를 바탕으로 만들 수 있는 모든 레시피를 위상 정렬을 사용하여 찾아내는 문제이다.

## 주요 포인트

- 이 문제는 Topological Sort (위상 정렬) 로 해결할 수 있습니다.
- 어떤 레시피를 만들기 위해서는 해당 레시피가 필요로 하는 재료(혹은 다른 레시피)들이 먼저 준비되어야 한다.
- `dependencies` 관계가 존재하므로 그래프 구조로 보고 푸는 게 맞다.

## 나의 코드

```jsx
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
```

## 나의 수도 코드

1. 그래프 생성 
    
    각 재료가 어떤 레시피를 만드는 데 사용되는지를 `map`으로 저장.
    
2. 진입 차수(in-degree) 설정
    
    각 레시피가 몇 개의 재료(노드)를 필요로 하는지 `inDegree`로 관리.
    
3. 초기 공급품 처리
    
    `supplies`에 있는 재료들을 큐에 먼저 넣는다. 이 재료들은 이미 무한히 가지고 있으므로 사용 가능하다고 간주.
    
4. 위상 정렬 시작
    
    큐에서 하나씩 꺼내면서 이 재료를 필요로 하는 레시피들의 `inDegree`를 감소시키고, `inDegree`가 0이 되면 해당 레시피는 만들 수 있으므로 큐에 추가.
    

### 동작 과정 (예시)

```jsx
recipes = ["bread", "sandwich"];
ingredients = [["yeast","flour"],["bread","meat"]];
supplies = ["yeast", "flour", "meat"];
```

1. `yeast`, `flour`, `meat` 큐에 삽입.
2. `yeast` 꺼내서 `bread`의 `inDegree` 1 감소 (2 → 1).
3. `flour` 꺼내서 `bread`의 `inDegree` 1 감소 (1 → 0), `bread` 큐 삽입.
4. `meat` 꺼내서 `sandwich`의 `inDegree` 1 감소 (2 → 1).
5. `bread` 꺼내서 `sandwich`의 `inDegree` 1 감소 (1 → 0), `sandwich` 큐 삽입.
6. 최종적으로 `bread`와 `sandwich`를 만들 수 있음.

## 시간 복잡도

1. 그래프 생성
    - 각 레시피마다 필요한 재료들을 처리하므로, 시간 복잡도는 `O(n * m)` (n: 레시피 개수, m: 각 레시피에 필요한 재료 개수)이다.
2. 큐 처리
    - 큐에 들어가는 원소는 최대 `n + k` (n: 레시피 개수, k: 공급품의 수)이고, 큐의 각 원소를 처리할 때마다 해당 레시피의 재료를 확인하는 데 `O(1)` 시간이 걸리므로 큐 처리는 `O(n + k)` 시간이 소요된다.

따라서 전체 시간 복잡도는 `O(n * m + n + k)`이다.

## 공간 복잡도

1. 그래프 : 각 재료가 속한 레시피를 저장하므로 공간 복잡도는 `O(n * m)`이다.
2. `inDegree` 맵 : 각 레시피에 대해 `inDegree` 값을 저장하므로 `O(n)`이다.
3. 큐 : 최악의 경우 큐에 들어가는 원소의 수는 최대 `n + k`입니다. 따라서 큐에 필요한 공간은 `O(n + k)`이다.

## 회고

이번 문제를 풀면서 위상 정렬을 사용해 레시피와 재료 간의 의존 관계를 효율적으로 처리하는 방법을 배웠다.

공급품부터 시작하여 레시피를 만들 수 있는지 확인하는 방식이 직관적이면서도, 그래프를 이용해 상호 의존성을 관리하는 부분에서 많은 도움이 되었다.
