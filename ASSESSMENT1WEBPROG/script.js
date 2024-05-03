document.getElementById('calculateBtn').addEventListener('click', function() {
    // WILL GET THE INPUT VALUE
    const petrolCost = parseFloat(document.getElementById('petrolCost').value);
    const liters = parseFloat(document.getElementById('liters').value);
  
    //  WILL CALCULATE THE TOTAL COST
    const totalCost = petrolCost * liters;
  
    // WILL DISPLAY TOTAL COST
    document.getElementById('totalCost').textContent = `Total cost: $${totalCost.toFixed(2)}`;
  });