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
