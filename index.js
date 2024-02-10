document.addEventListener('DOMContentLoaded', function() {
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let maxAmt = ['smp',0];
    console.log(data);
    data.forEach(element => {
      let dayCode = element['day'];
      let amount = String(parseInt(element['amount'] * 1.5)) + '%';
      if(element['amount'] > maxAmt[1]) {
        maxAmt[1] = element['amount'];
        maxAmt[0] = element['day'];
      }
      let barQuery = '.' + dayCode + '-bar';
      let bar = document.querySelector(barQuery);
      bar.style.minHeight = amount;

      let tooltip = bar.parentElement.querySelector('.tooltip');
      tooltip.innerHTML = '$' + element['amount'];

    });
    maxQuery = '.' + maxAmt[0] + '-bar';
    document.querySelector(maxQuery).classList.add('max');
  });
})
