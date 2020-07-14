const getGradeMessage = function (score, totalScore = 100) {
  const percent = (score / totalScore) * 100
  let grade = ''
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
  const preposition = (grade === 'A' || grade === 'F') ? 'an' : 'a'
  return `You got ${preposition} ${grade} (${percent}%)!`
}

const message = getGradeMessage(19, 20);
console.log(message)