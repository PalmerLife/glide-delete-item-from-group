window.function = function (series, numberToRemove) {
  // Ensure inputs are available
  if (!series.value || numberToRemove.value === undefined) {
    return;
  }

  // Convert the series from string to an array of numbers
  let numbers = series.value.split(',').map(Number);

  // Remove the specified number
  numbers = numbers.filter(n => n !== numberToRemove.value);

  // Decrement every number greater than the specified number
  numbers = numbers.map(n => n > numberToRemove.value ? n - 1 : n);

  // Convert the array back to a comma-separated string and return
  return numbers.join(',');
}
