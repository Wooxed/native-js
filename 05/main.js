const strings = ['Alex', 'Donald', 'Bob']
console.log(strings.sort())


const strings1 = ['Alex', 'Donald', 'Bob', 100] // 100, Alex, Bob, Donald

const strings2 = ['Alex', 'Donald', 'alex', 'Bob', 100, 'alex', 'Юра']// 100, Alex, Bob, Donald, alex, Юра

const numbers = [1000, 250, 99, 801]
console.log(numbers.sort())

const compareFunc = (a, b) => a - b // 10, 100 => <0; 100, 10 => >0
console.log(numbers.sort(compareFunc))
console.log(numbers.sort((a, b) => a - b))


let students = [
    {
        name: 'alex',
        age: 27,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Bob',
        age: 27,
        isMarried: true,
        scores: 88,
    },
    {
        name: 'Alex',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Helge',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    }
];

console.log(students.sort((a, b) => a.age - b.age)); // по возрасту
console.log(students.sort((a, b) => {  // регистрозависимая
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}))

console.log(students.sort((a, b) => a.name.localeCompare(b.name))) //регистро НЕ зависимая

// вложенная сортировка (по возрасту и потом по успеваемости)
console.log(students.sort((a, b) => {
    if (a.age < b.age) {
        return -1
    } else if (a.age > b.age) {
        return 1
    } else {
        if (a.scores >= b.scores) {
            return -1
        } else {
            return 1
        }
    }
}));

// bubble sort

const nums = [23, 56, 34, 1, 55, 4]  // по возрастанию
let isSorted = true;
for (let j = 0; j < nums.length - 1; j++) {
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            [nums[i + 1], nums[i]]=[nums[i], nums[i + 1]]
            // const temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
        }
    }
    if(isSorted)break
}
console.log(nums)

