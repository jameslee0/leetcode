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

    return s1 === s2;

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
