let btn = document.getElementById("btn");

//Price per square metre.
let pricePsqm = 1.25; 


btn.addEventListener('click', function() {
    let customLength = document.getElementById('banner_length').value;
    let customWidth = document.getElementById('banner_width').value;

    let totalBill = document.getElementById('total_bill').value = customLength * customWidth * pricePsqm;


    document.getElementById('finalSum').innerHTML = "Your final bill will be £"+totalBill
  
})

// the following function uses an increment loop, when 'add to cart' btn is pressed, the number in cart goes up.
var number = 0;

addcart.addEventListener('click', function(){
    var count = document.getElementById('cart_count');

    number++;
    count.innerHTML = number;
})

//Problem: increment happens even when nothing is put into calculator. Need to fix so it shows (in red) fill in form before it can add to cart.

//What's needed still? - A side bar showing detailed basket when basket is pressed.

