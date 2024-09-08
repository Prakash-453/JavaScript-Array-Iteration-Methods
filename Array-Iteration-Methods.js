// Map
1. Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6,
     8, 10]

PROGRAM : 
arr = [1, 2, 3, 4, 5]
res = arr.map((a) => a * 2)
console.log(res)

OUTPUT: 
[ 2, 4, 6, 8, 10 ]

2. Convert strings to uppercase: ["hello", "world"] → 
    ["HELLO", "WORLD"]

PROGRAM : 
arr = ["hello", "world"]
res = arr.map(a => a.toUpperCase())
console.log(res)

OUTPUT: 
[ 'HELLO', 'WORLD' ]

// Filter

1. Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4]

PROGRAM : 
arr = [1, 2, 3, 4, 5]
res = arr.filter(a => a % 2 == 0)
console.log(res);

OUTPUT: 
[ 2, 4 ]

2. Get strings longer than 5 characters: ["hello", "world", 
    "abc"] → ["hello", "world"]

PROGRAM : 
arr = ["hello", 'world', 'abc']
res = arr.filter(a => a.length >= 5);
console.log(res);

OUTPUT: 
[ 'hello', 'world' ]

// ForEach
1. Log each number in an array: [1, 2, 3, 4, 5] → console 
     logs each number

PROGRAM : 
arr = [1, 2, 3, 4, 5]
arr.forEach(a => console.log(a));

OUTPUT: 
    1
    2
    3
    4
    5

2. Append "!" to each string in an array: 
    ["hello", "world"] → ["hello!", "world!"]
PROGRAM : 
arr = ['hello', 'world']
arr.forEach((a, b) => {
    arr[b] = a + "!"
});
console.log(arr)

OUTPUT: 
[ 'hello!', 'world!' ]

// Every
1. Check if all numbers in an array are positive:
     [1, 2, 3, 4, 5] → true

PROGRAM : 
arr = [1, 2, 3, 4, 5]
res = arr.every(x => x > 0)
console.log(res)

OUTPUT: 
true

2. Check if all strings in an array are longer than 5
    characters: ["hello", "world", "abc"] → false

PROGRAM : 
arr = ["hello", "world", "abc"]
res = arr.every(x => x.length > 5)
console.log(res)
OUTPUT: 
false


// Some
1. Check if any number in an array is even: [1, 2, 3, 4, 5]
     → true

PROGRAM : 
arr = [1, 2, 3, 4, 5]
res = arr.some(x => x % 2 == 0)
console.log(res)

OUTPUT: 
true

2. Check if any string in an array contains "x": ["hello", 
    "world", "max"] → true

PROGRAM : 
arr = ["hello", "world", "max"]
res = arr.some(a => a.includes('x'))
console.log(res)

OUTPUT: 
true
true

// Find

1. Find the first even number in an array: [1, 2, 3, 4, 5] → 2

PROGRAM : 
arr = [1, 2, 3, 4, 5]
res = arr.find(x => x % 2 == 0)
console.log(res)
OUTPUT: 
    2

2. Find the first string in an array that contains 
    "x": ["hello", "world", "max"] → "max"

PROGRAM : 
arr = ["hello", "world", "max"]
res = arr.find(a => a.includes('x'))
console.log(res)

OUTPUT: 
max

// FindIndex

1. Find the index of the first even number in an array:
    [1, 2, 3, 4, 5] → 1

PROGRAM : 
arr = [1, 2, 3, 4, 5]
res = arr.findIndex(i => i % 2 == 0)
console.log(res)

OUTPUT: 
  1

2. Find the index of the first string in an array that
     contains "x": ["hello", "world", "max"] → 2

PROGRAM : 
arr = ["hello", "world", "max"]
res = arr.findIndex(a => a.includes('x'))
console.log(res)

OUTPUT:  
    2
