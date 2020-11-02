let btn = document.getElementById("btn");

//Price per square metre.
let pricePsqm = 1.25; 


btn.addEventListener('click', function() {
    let customLength = document.getElementById('banner_length').value;
    let customWidth = document.getElementById('banner_width').value;

    let totalBill = document.getElementById('total_bill').value = customLength * customWidth * pricePsqm;


    document.getElementById('finalSum').innerHTML = "Your final bill will be £"+totalBill
  
})
//new additions. Following lines will add the new price quote to cart with measurements etc in detailed receipt. (1st Commit)
let cartCount = document.getElementById("cart_count");


addcart.addEventListener('click', function(){
    //need to make 'addcart' button increment value of cart counter using i++
})

