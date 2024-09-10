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
