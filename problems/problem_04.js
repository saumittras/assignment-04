function calculateFinalScore(obj) {
  if (obj.constructor !== Object) {
    return "Invalid Input";
  }

  let testScore;
  if (obj.testScore >= 0 && obj.testScore <= 50) {
    testScore = obj.testScore;
  }

  let schoolScore;
  if (obj.schoolGrade >= 0 && obj.schoolGrade <= 30) {
    schoolScore = obj.schoolGrade;
  }

  let ppScore = 0;
  if (obj.isFFamily === true) {
    ppScore = 20;
  }

  let totalScore = testScore + schoolScore + ppScore;
  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}
