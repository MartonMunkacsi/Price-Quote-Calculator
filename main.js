let btn = document.getElementById("btn");

let pricePsqm = 1.25; 


btn.addEventListener('click', function() {
    let customLength = document.getElementById('banner_length').value;
    let customWidth = document.getElementById('banner_width').value;

    let totalBill = document.getElementById('total_bill').value = customLength * customWidth * pricePsqm;
  
})
