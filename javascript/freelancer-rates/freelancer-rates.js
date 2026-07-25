// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const BILLABLE_DAYS_PER_MONTH = 22;

  // 1. Calculate how many full months and remaining individual days there are
  const fullMonths = Math.floor(numDays / BILLABLE_DAYS_PER_MONTH);
  const remainingDays = numDays % BILLABLE_DAYS_PER_MONTH;

  // 2. Fetch the standard daily rate from the helper function
  const normalDailyRate = dayRate(ratePerHour);

  // 3. Compute costs for discounted months and standard remaining days
  const baseMonthlyCost = BILLABLE_DAYS_PER_MONTH * normalDailyRate;
  const discountedMonthlyCost = baseMonthlyCost * (1 - discount);

  const totalCost = (fullMonths * discountedMonthlyCost) + (remainingDays * normalDailyRate);

  // 4. Return the total cost rounded up to the nearest whole integer
  return Math.ceil(totalCost);
}
