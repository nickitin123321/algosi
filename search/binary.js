const genNumberArray = require('../gen/number/array')
const sorted = genNumberArray(1000000, 100).sort((a, b)=> a - b).filter((el) => el !== 3)

// Math.floor Math.ceil Math.round

// string number object null undefined boolean BigInt Symbol

const includes = (arr, value) => {
  const l = arr.length
  const del = Math.floor(l / 2)

  if(arr[del] === value) {
    return true
  }

  if(l === 1){
    return false
  }

  if(value < arr[del]) {
    return includes(arr.slice(0, del), value)
  } else {
    return includes(arr.slice(del, l), value)
  }
}

//let t = Date.now()
//console.log(includes(sorted, 3))
//console.log(Date.now() - t)

console.log(typeof 1 * 'd')

// t = Date.now()
// console.log(sorted.includes(3))
// console.log(Date.now() - t)

// const indexOf = () => {
//   const l = arr.length
//   const del = Math.floor(l / 2)

//   if(arr[del] === value) {
//     return true
//   }

//   if(l === 1){
//     return false
//   }

//   if(value < arr[del]) {
//     return includes(arr.slice(0, del), value)
//   } else {
//     return includes(arr.slice(del, l), value)
//   }
// }

//console.log(sorted.indexOf(3), sorted)