function generateRandomDigit() {
  const min = parseInt(document.getElementById('minValue').value);
  const max = parseInt(document.getElementById('maxValue').value);
  
  if (isNaN(min) || isNaN(max) || min > max) {
      document.getElementById('result').textContent = 'Please enter valid min and max values.';
      return;
  }
  
  const randomDigit = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('result').textContent = `Random Number: ${randomDigit}`;
}
