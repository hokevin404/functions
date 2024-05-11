// Part 1: Thinking Functionally
// With that in mind, write functions that accomplish the following:
//      Take an array of numbers and return the sum.
//      Take an array of numbers and return the average.
//      Take an array of strings and return the longest string.
//      Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//          For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
//      Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// Take an array of numbers and return the sum.
let myArr = [1, 2, 3, 4, 5]

function arrSum(arr)
{
    let sum = 0;
    for(let num of arr)
        sum += num;
    return sum;
}
console.log(`Array: [${myArr}]`);
console.log(`Sum of array: ${arrSum(myArr)}`);

// Take an array of numbers and return the average.
function arrAvg(arr)
{
    let numOfItems = arr.length;
    return arrSum(arr) / numOfItems;
}
console.log(`Average of array: ${arrAvg(myArr)}`);

// Take an array of strings and return the longest string.
const arrString = ['My string', 'Your string', 'This is our string', 'Her string']

function arrLongestStr(arr)
{
    let longestStr = '';
    let counter = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++)
    {
        for(let char of arr[i])
            counter++;

        if(counter > count)
        {
            count = counter;
            longestStr = arr[i];
        }

        counter = 0;
    }
    return console.log(longestStr);
}
arrLongestStr(arrString);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//  ~For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(arr, num)
{
    let counter = 0;
    let holderArr = [];

    for(let word of arr)
    {
        for(let char in word)
            counter++;

        if(counter > num)
            holderArr.push(word);

        counter = 0;
    }
    return console.log(holderArr);
}
stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printN(num)
{
    if(num === 0)
        return;
    console.log(num--);
    printN(num);
}
printN(3);