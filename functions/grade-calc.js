let getGradeMessage = function (score, totalScore = 100) {
  let percent = (score / totalScore) * 100
  if (percent >= 90 && percent <= 100) {
    grade = 'A'
  } else if (percent >= 80) {
    grade = 'B'
  } else if (percent >= 70) {
    grade = 'C'
  } else if (percent >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }
  let preposition = (grade === 'A' || grade === 'F') ? 'an' : 'a'
  return `You got ${preposition} ${grade} (${percent}%)!`
}

let message = getGradeMessage(19, 20);
console.log(message)