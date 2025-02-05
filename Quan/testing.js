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

    return index;
}

const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(removeDuplicates(nums));