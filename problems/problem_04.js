function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj === "number" ||
    typeof obj === "string" ||
    obj === null ||
    Array.isArray(obj)
  ) {
    return "Invalid Input";
  }

  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let testScore;
  if (obj.testScore >= 0 && obj.testScore <= 50) {
    testScore = obj.testScore;
  } else if (obj.testScore < 0 || obj.testScore > 50) {
    return "Invalid Input";
  }

  let schoolGrade;
  if (obj.schoolGrade >= 0 && obj.schoolGrade <= 30) {
    schoolGrade = obj.schoolGrade;
  } else if (obj.schoolGrade < 0 || obj.schoolGrade > 30) {
    return "Invalid Input";
  }

  let ppScore = 0;
  if (obj.isFFamily === true) {
    ppScore = 20;
  }

  let totalScore = testScore + schoolGrade + ppScore;
  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}
