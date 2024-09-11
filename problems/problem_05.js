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
