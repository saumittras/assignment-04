function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  const blanceAmount = income - expenses;
  const totalTax = blanceAmount * 0.2;
  return totalTax;
}

function sendNotification(email) {
  if (
    typeof email !== "string" ||
    email.includes("@") !== true ||
    email.indexOf("@") < 1 ||
    email.length - 1 === email.indexOf("@")
  ) {
    return "Invalid Email";
  }

  let atSignCount = 0;
  for (const letter of email) {
    if (letter === "@") {
      atSignCount++;
    }
  }
  if (atSignCount > 1) {
    return "Invalid Email";
  }

  const emailToArry = email.split("@");
  const output = emailToArry[0] + " sent you an email from " + emailToArry[1];
  return output;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  let leterx;
  for (const leter of name) {
    leterx = parseInt(leter);
    if (isNaN(leterx) === false && typeof leterx === "number") {
      return true;
    }
  }
  return false;
}

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

function waitingTime(waitingTimes, serialNumber) {
  const candidateInvervied = waitingTimes.length;
  if (
    Array.isArray(waitingTimes) !== true ||
    typeof serialNumber !== "number" ||
    candidateInvervied >= serialNumber
  ) {
    return "Invalid Input";
  }

  let totalInterviewingTimes = 0;
  for (const time of waitingTimes) {
    totalInterviewingTimes += time;
  }

  const averageTime = totalInterviewingTimes / candidateInvervied;
  const result =
    (serialNumber - 1 - candidateInvervied) * Math.round(averageTime);
  return result;
}
