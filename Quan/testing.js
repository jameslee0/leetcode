//FizzBuzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Removing Duplicates

function removeDuplicates(nums) {
    index = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] != nums[i - 1]){
            nums[index] = nums[i];
            index++;
        }
    }

    return [index, nums];
}

const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(removeDuplicates(nums));

// Hi

function areAlmostEqual(s1, s2) {
    let offset1 = '';
    let counter = 0;
    let swap = false;

    if (s1 === s2) return true;

    for (i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            counter++;
            if (counter > 2) return false;
            if (offset1 == s2[i]) {
                swap = true;
            }
            offset1 = s1[i];
        }
    }

    if (swap) return true;

    return false;
}


// Strings are almost equal

function checkAlmostEquivalent(word1, word2) {
    let counterMap = new Map();

    for(let i = 0; i < word1.length; i++){
        const letter1 = word1[i];
        if(counterMap.get(letter1)){
            counterMap.set(letter1 , (counterMap.get(letter1)) + 1);
        }else{
            counterMap.set(letter1 , 1);
        }

        const letter2 = word2[i];
        if(counterMap.get(letter2)){
            counterMap.set(letter2 , (counterMap.get(letter2)) - 1);
        }else{
            counterMap.set(letter2 , -1);
        }

    }

    for([key, value] of counterMap){
        if(Math.abs(value) > 3){
            return false;
        }
    }

    return true;
};

//Color map Query
function queryResults(limit, queries) {
    const ballMap = new Map(), colorMap = new Map()
    let result = [];

    for ([ballPosition, color] of queries) {
        if (ballMap.has(ballPosition)) { 
            let colorCount = colorMap.get(ballMap.get(ballPosition)) - 1;
            if (colorCount == 0) {
                colorMap.delete(ballMap.get(ballPosition));
                uniqueColor--;
            }
            else {
                colorMap.set(ballMap.get(ballPosition), colorCount);
            }
            
        }

        //Updating ballMap
        ballMap.set(ballPosition, color);
//First iteration
// BallMap: [1: 4]
// ColorMap: [4: 1]
// Unique: 1
// Result: [1]

//Second Iteration
// BallMap: [1: 4, 2: 5]
// ColorMap: [4: 1, 5: 1]
// Unique: 2
// Result: [1, 2]

//Third Iteration
// BallMap: [1: 3, 2: 5, ]
// ColorMap: [ 5: 1, 3: 1  ]

// Unique: 2
// Result: [1, 2, 2]

        colorMap.set(color, (colorMap.get(color) ?? 0) + 1);

        if (colorMap.get(color) === 1) {
            uniqueColor++;
        }
        result.push(colorMap.size);
    }

    return result; 
};

///Fasterrr of the above
function queryResults(limit, queries) {
    const ballMap = new Map();
    const colorMap = new Map();
    return queries.map(([ball, color]) => {
        if (ballMap.has(ball)) {
            const prevColor = ballMap.get(ball);
            colorMap.set(prevColor, colorMap.get(prevColor) - 1);
            if (colorMap.get(prevColor) === 0) colorMap.delete(prevColor);
        }
        ballMap.set(ball, color);
        colorMap.set(color, (colorMap.get(color) ?? 0) + 1);
        return colorMap.size; // Use `size` property, not `size()`
    });
};



//Reverse Integer
function reverse(x) {
    const split = [...x.toString()];
    let neg = false;
    let newArray = [];
    let index = 0;



    if (x < 0) neg = true;
    for (let i = split.length; i >= 0; i--) {

        newArray[index] = split[i];
        index++;
    }

    let result = parseInt(newArray.join(''));



    if(neg) result *= -1;

    if(result >= Math.pow(2, 31) + 1 || result <= Math.pow(-2, 31)) {
        return 0;
    } 
    return result;
};

//Faster above 
function reverse(n) {
    let bit = Math.pow(2,31) -1;

    let rev = n.toString().split('').reverse().join('');
    let result = parseInt(rev)

    if (result > bit || result < -(bit)){
        return 0;
    }
    if(n<0){
        return -result;
    }else{
        return result;
    }
};

//Daily

function clearDigits(s) {
    let stack = [];

    for (let char of s){
        if(!isNaN(char)) {
            if(stack.length) {
                stack.pop();
            }
        }
        else {
            stack.push(char);
        }
    }
    return stack.join("");
};

//Binary Watch 
function readBinaryWatch(turnedOn) {
    results = [];

    for (hours = 0; hours < 12; hours++) {
        for (minutes = 0; minutes < 60; minutes++) {
            binaryNumber = ((hours * 64) + minutes).toString(2).split("").filter(ones => ones === "1").length;
            if (binaryNumber === turnedOn) {
                results.push(minutes >= 10 ? `${hours}:${minutes}` : `${hours}:0${minutes}`);
            }
        }
    } 
    return results;
};

//Leetcode Daily

function maximumSum(nums) { 
    let max = new Array(82).fill(0);
    let ans = -1;
    for (let x of nums) {
        let sum = 0, temp = x;
        while (temp !== 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        if (max[sum] !== 0) ans = Math.max(ans, x + max[sum]);
        max[sum] = Math.max(max[sum], x);
    }
    return ans;
};
maximumSum([3, 6, 8, 5]);



//Leetcode Daily

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Priority Queue Leetcode, but JS doesn't have a priority queue so commented out
// function minOperations(nums, k) {
//     let stageCounter = 0;

//     let queue = new MinPriorityQueue();


//     // console.log(queue);
//     // queue.dequeue();
//     // console.log(queue);
//     for(num of nums) {
//         queue.enqueue(num);
//     }
//     // for(dict of queue._heap._nodes){
//     //     console.log(dict.value);
//     // }
//     // console.log(queue.dequeue().element);

//     // if(queue.size() > 2 || queue.front() >= k) {
//     //     stageCounter++;
//     // }
//     // (queue.size() >= 2 &&
//     while ( queue.front().element < k) {
//         // console.log([stageCounter, queue.size(), queue.front().element, queue._heap._nodes]);
//         let val1 = queue.dequeue().element;
//         let val2 = queue.dequeue().element;

//         val1 = (Math.min(val1, val2) * 2) + Math.max(val1,val2);

//         queue.enqueue(val1);
//         stageCounter++;
//     }

//     return stageCounter;
// };

// var minOperations = function(nums, k) {
//     nums.sort((a, b) => b- a)
//     let arr = [], operTime = 0, arrPos = 0
//     while((nums.length > 0 && nums[nums.length-1] < k) || (arr.length > 0 && arr[arrPos] < k)) {
//         let min1, min2
//         console.log(['nums',nums]);
//         if(nums[nums.length-1] && !(nums[nums.length-1] > arr[arrPos])) {
//             min1 = nums.pop()
//             console.log(['Log', operTime, 'min1', min1, 'arrPos', arrPos]);
//         }
//         else { 
//             min1 = arr[arrPos]
//             arrPos ++
//             console.log(['Else', operTime, 'min1', min1, 'arrPos', arrPos]);
//         }
//         if(nums[nums.length-1] && !(nums[nums.length-1] > arr[arrPos])){
//             min2 = nums.pop();
//             console.log(['Log', operTime, 'min2', min2, 'arrPos', arrPos]);
//         }

//         else { 
//             min2 = arr[arrPos]
//             arrPos ++
//             console.log(['Else', operTime, 'min2', min2, 'arrPos', arrPos]);
//         }
//         arr.push(min1*2 + min2)
//         console.log(['arr', arr, 'postNums', nums])
//         operTime ++
//     }
//     return operTime
// };

// var minOperations = function(nums, k) {
//     let res = 0
//     const pq = new PriorityQueue({
//         compare: (a, b) => {
//             return a > b ? 1 : -1;
//         },
//     });
//     for(let n of nums){
//         pq.enqueue(n)
//     }
//     while(pq._heap._nodes[0] < k && pq._heap._nodes.length > 1){
//         let one = pq.dequeue()
//         let two = pq.dequeue()
//         pq.enqueue(Math.min(one,two)*2 + Math.max(one,two))
//         res++
//     }
//     return res
// };
// minOperations([1, 2, 3, 4, 5, 6], 7);

// var ProductOfNumbers = function() {
//     this.stack = [1];
// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// ProductOfNumbers.prototype.add = function(num) {
//     if(num === 0) {
//         this.stack = [1];
//     }
//     else {
//         const index = this.stack.length;

//         const prevNum = this.stack[index - 1];

//         this.stack.push(prevNum * num);
//     }
// };

// /** 
//  * @param {number} k
//  * @return {number}
//  */
// ProductOfNumbers.prototype.getProduct = function(k) {
//     const length = this.stack.length;

//     if(k >= length) {
//         return 0;
//     }
//     return this.stack[length - 1] / this.stack[length - 1 - k]
// };

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

// function canPartition(s, target) {
//     if (s === "" && target === 0) return true;
//     if (target < 0) return false;
//     let ans = false;
//     for (let i = 0; i < s.length; i++) {
//       let left = s.substring(0, i + 1);
//       let right = s.substring(i + 1);
//       let leftNum = parseInt(left);
  
//       let isPossible = canPartition(right, target - leftNum);
//       if (isPossible) {
//         ans = true;
//         break;
//       }
//     }
//     return ans;
//   }
//   function punishmentNumber(n) {
//     let sum = 0;
//     for (let num = 1; num <= n; num++) {
//       let sqr = num * num;
//       if (canPartition(sqr.toString(), num)) {
//         sum += sqr;
//       }
//     }
//     return sum;
//   }

//   var constructDistancedSequence = function(n) {
//     const arr = new Array(2 * n - 1).fill(null); 
//     const used = new Set(); 
    
//     function backtrack(index) {
//         if (index === arr.length) return [...arr]; 
//         if (arr[index] !== null) return backtrack(index + 1); 

//         for (let num = n; num >= 1; num--) { 
//             if (used.has(num)) continue; 
//             if (num === 1) { 
//                 arr[index] = 1;
//                 used.add(1);
//                 const result = backtrack(index + 1);
//                 if (result) return result; 
//                 arr[index] = null; 
//                 used.delete(1);
//             } else { 
//                 if (index + num < arr.length && arr[index + num] === null) {
//                     arr[index] = arr[index + num] = num; 

//                     used.add(num);
//                     const result = backtrack(index + 1);
//                     if (result) return result; 
//                     arr[index] = arr[index + num] = null; 
//                     used.delete(num);
//                 }
//             }
//         }
//         return null;
//     }

//     return backtrack(0);
// };

// IMPORTANTTT!!!!!!!!
// DIJKSTRA'S ALGORITHM
let V = 9;

// A utility function to find the 
// vertex with minimum distance 
// value, from the set of vertices 
// not yet included in shortest 
// path tree 
function minDistance(dist,sptSet)
{
    
    // Initialize min value 
    let min = Number.MAX_VALUE;
    let min_index = -1;
    
    for(let v = 0; v < V; v++)
    {
        if (sptSet[v] == false && dist[v] <= min) 
        {
            min = dist[v];
            min_index = v;
            console.log(["if statement hit", "dist", dist[v], "min", min, "min_index", min_index])
        }
        else{
            console.log(["v Counter", v, "dist", dist[v], "min", min, "min_index", min_index])
        }
    }
    console.log("min")
    console.log(min_index)
    return min_index;
}

// A utility function to print 
// the constructed distance array 
function printSolution(dist)
{
    console.log("Vertex \t\t Distance from Source<br>");
    for(let i = 0; i < V; i++)
    {
        console.log(i + " \t\t " + 
                 dist[i] + "<br>");
    }
}

// Function that implements Dijkstra's 
// single source shortest path algorithm 
// for a graph represented using adjacency 
// matrix representation 
function dijkstra(graph, src)
{
    let dist = new Array(V);
    let sptSet = new Array(V);
    
    // Initialize all distances as 
    // INFINITE and stpSet[] as false 
    for(let i = 0; i < V; i++)
    {
        dist[i] = Number.MAX_VALUE;
        sptSet[i] = false;
    }
    
    // Distance of source vertex 
    // from itself is always 0 
    dist[src] = 0;
    
    // Find shortest path for all vertices 
    for(let count = 0; count < V - 1; count++)
    {
        
        // Pick the minimum distance vertex 
        // from the set of vertices not yet 
        // processed. u is always equal to 
        // src in first iteration. 
        let u = minDistance(dist, sptSet);
        
        // Mark the picked vertex as processed 
        sptSet[u] = true;
        
        // Update dist value of the adjacent 
        // vertices of the picked vertex. 
        console.log(["dist", dist])
        for(let v = 0; v < V; v++)
        {
            
            // Update dist[v] only if is not in 
            // sptSet, there is an edge from u 
            // to v, and total weight of path 
            // from src to v through u is smaller 
            // than current value of dist[v] 
            if (!sptSet[v] && graph[u][v] != 0 && 
                   dist[u] != Number.MAX_VALUE &&
                   dist[u] + graph[u][v] < dist[v])
            {
                dist[v] = dist[u] + graph[u][v];
            }
        }
        console.log(["post for loop", dist])
    }
    
    // Print the constructed distance array
    printSolution(dist);
}

// Driver code
let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
              [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
              [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ]
dijkstra(graph, 0);

//Changes for testing

var smallestNumber = function(pattern) {
    let ans = ["1"], temp = [];
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === 'I') {
            ans.push(...temp.reverse(), (i + 2).toString());
            temp = [];
        } else {
            temp.push(ans.pop());
            ans.push((i + 2).toString());
        }
    }
    return ans.concat(temp.reverse()).join("");
};

var getHappyString = function(n, k) {
    let n2 = n;

    function dfs(prefix, n, k) {
        if (n === 0) return prefix;
        for (let c of ['a', 'b', 'c']) {
            if (prefix.length > 0 && c === prefix[prefix.length - 1]) continue;
            let cnt = 2 ** (n2 - prefix.length - 1);
            if (cnt >= k) return dfs(prefix + c, n - 1, k);
            else k -= cnt;
        }
        return "";
    }

    return dfs("", n, k);
};