const originalGrade = 43
let finalGrade = 0

if (originalGrade < 68) {
  finalGrade = originalGrade
} else {
  if (originalGrade % 5 === 0) {
    finalGrade = originalGrade
  } else if ((originalGrade + 1) % 5 === 0) {
    finalGrade = originalGrade + 1
  } else if ((originalGrade + 2) % 5 === 0) {
    finalGrade = originalGrade + 2
  } else {
    finalGrade = originalGrade
  }
}

console.log(finalGrade)