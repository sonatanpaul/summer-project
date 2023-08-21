
let total = 0;

function handleClickBtn(target){
   
    const selectedItem = document.getElementById("selectItem");
    const itemName = target.childNodes[5].innerText;
    const li = document.createElement("li")
    const itemList = li.innerText = itemName;
    selectedItem.appendChild(li);
    const price = (target.childNodes[7].innerText.split(" ")[0]);
    total = parseFloat(total) + parseFloat(price);
    const firstTotal = document.getElementById("total-price").innerText = total;
    const makeBtn = document.getElementById("makePurchaseBtn");

    if(firstTotal >= 0){
        makeBtn.disabled = false;
    }else{
        makeBtn.disabled = true;
    }
    const grandTotal = document.getElementById("grand-total-price").innerText = total;
    
    const couponBtn = document.getElementById("coupon-btn");
    if(firstTotal >= 200 ){
        couponBtn.disabled = false;
    }else{
        couponBtn.disabled = true;
    }
}

    const applyCouponButton = document.getElementById("coupon-btn");
    const couponCodeInput = document.getElementById("input-field");
    couponCodeInput.addEventListener('input', function() {
        const couponBtn = couponCodeInput.value;
        
    
        if (couponBtn === "SELL200") {
            applyCouponButton.disabled = false;
        }  else {
            applyCouponButton.disabled = true;  
        }
    });  
  


applyCouponButton.addEventListener("click", function() {
    const enteredCoupon = couponCodeInput.value;
    const firstTotal = document.getElementById("total-price").innerText = total;
    
    discount = (firstTotal * 0.20).toFixed(2);
    totalDiscount = firstTotal-discount;
     document.getElementById("grand-total-price").innerText = totalDiscount.toFixed(2);
     document.getElementById("discount-price").innerText = discount;
     couponCodeInput.value = "";
  });

  
 document.getElementById("go-home-btn").addEventListener("click", function(){
        window.location.reload();
   });
   

