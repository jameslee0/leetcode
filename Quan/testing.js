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