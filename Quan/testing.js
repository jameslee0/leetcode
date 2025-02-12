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

hi