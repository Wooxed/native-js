// number, string, boolean, null, undefined, NaN
// object, array, function

const a = 4
const b = a

const user1 = {   //#333
    name: 'Bob',
    age: 23,
    isStudent: true
}

const user2 = user1   //#333
user2.name = 'Anna'
console.log(user1)

// делаем копию = вносим изменения в копию = используем копию с изменениями

// const copyUser = {}    // new Object()
// copyUser.name = user1.name
// copyUser.age = user1.age
// copyUser.isStudents = user1.isStudents


const copyUser = {...user1}

console.log(copyUser)
console.log(copyUser === user2)  // false

const copyUser1 = {...user1, isStudent: false}  // изменение существующего свойства объекта
const copyUser2 = {...user1, isMarried: false}  // добавление свойства

const address = {
    country: 'Thailand',
    city: 'Bangkok'
}
const copyUser3 =  {...user1, ...address}
console.log(copyUser3)

const student = {
    name: 'Bob',
    age: 23,
    isStudent: true,
    address: {
        country: 'Thailand',
        city: 'Bangkok'
    },
    courses: ['HTML', 'CSS', 'JS']
}

const copyStudent = {...student, courses: [...student.courses, 'Redux']}
console.log(student.courses)
console.log(copyStudent.courses)

const nickName = 'Hook'
const copyStudent1 = {...student, nickName}
console.log(copyStudent1)


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
]

const newUser = {
    id: 5,
    name: 'Donald',
    isStudent: true,
    address: {
        country: 'Sudan',
        city: 'Hartum'
    }
}

const users2 = [...users, newUser] // добавление элемента в массив

// delete id === 3

const users3 = users.filter(user => user.id !== 3) // true
console.log(users3)

const users4 = users.map(u => u.id === 1 ? {...u, address: {...u.address, city: 'Sudan'}} : u)
console.log(users4)

const users5 = users4.map(u => u.id === 1 ? {...u, name: 'Petr'} : u)
console.log(users5)