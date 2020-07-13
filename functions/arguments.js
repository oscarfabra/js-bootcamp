// Default arguments
// let getScoreText = function (name = 'Anonymous', score = 0) {
//   return `Name: ${name} - Score: ${score}`
// }

// let scoreText = getScoreText(undefined, 99)
// console.log(scoreText)

let getTip = function (total, tipPercent = 0.2) {
  return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tipMessage = getTip(150)
console.log(tipMessage)