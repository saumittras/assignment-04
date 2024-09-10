function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  const blanceAmount = income - expenses;
  const totalTax = blanceAmount * 0.2;
  return totalTax;
}
