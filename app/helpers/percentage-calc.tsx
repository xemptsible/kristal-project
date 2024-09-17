export function percentageDiff(startingValue: number, endValue: number) {
  const changedValue = endValue - startingValue;
  const percentage = (changedValue / startingValue) * 100;

  return percentage.toFixed(2);
}
