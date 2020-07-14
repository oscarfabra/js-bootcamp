// let name = '   Oscar Fabra  '

// console.log(name.length)

// // Convert to upper and lower case
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// // Includes method
// let password = 'abc123asdf098'
// console.log(password.includes('password'))

// // Remove whitespace from the begging and end of the string
// console.log(name.trim())

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!"#$%'))
console.log(isValidPassword('abc123!"#$%password'))