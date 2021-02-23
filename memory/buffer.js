//const buffer = Buffer.alloc(4)

// const buffer = Buffer.from([1, 2, 3])

const buffer = Buffer.from("Hello wolrd")

// console.log(buffer)

const abc = Buffer.alloc(26)
console.log(abc)

for (let index = 0; index < 26; index++) {
    abc[index] = index + 97
}

console.log(abc.toString())
