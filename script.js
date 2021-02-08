const removeBtn =document.getElementById("remove");
removeBtn.addEventListener("click", function(){
   const removeArea = document.getElementById("remove-area");
   removeArea.style.display = "none";
})
const removeBtn2 =document.getElementById("remove-a");
removeBtn2.addEventListener("click" , function(){
   const removeAreaA = document.getElementById("remove-area-a") ;
   removeAreaA.style.display = "none";
})
// remove area top ////////////////
const gun = document.getElementById("iPhoneMainPrice").textContent;
const gunNumber = parseFloat(gun)
const allMainPrice = document.getElementById("SEplusValue").textContent;
const allMainPriceNumber = parseFloat(allMainPrice)
const allOutputPrice = gunNumber + allMainPriceNumber ;
document.getElementById("subtotal").innerHTML = allOutputPrice ;
const firstTax = document.getElementById("tax").textContent  ;
const firstTaxNumber = parseFloat(firstTax) + allOutputPrice ;
document.getElementById("main-price").innerHTML = firstTaxNumber ;
// price add btn bottom 
const plusBtnA = document.getElementById("fist-plusBtnA");
plusBtnA.addEventListener("click" , function(){
   const valueIn = document.getElementById("first-iPhone-price").textContent;
   const all =  parseFloat(valueIn) + 1 ;
      if( all <= 10  ){
            document.getElementById("first-iPhone-price").innerHTML = all ;
            const gun = document.getElementById("iPhoneMainPrice").textContent;
            const numberGun = parseFloat(gun) + 1219 ;
            document.getElementById("iPhoneMainPrice").innerHTML = numberGun ;
            const subTotalMain = document.getElementById("subtotal").textContent ;
            const subTotalMainNumber = parseFloat(subTotalMain) + 1219 ; 
            document.getElementById("subtotal").innerHTML = subTotalMainNumber ;
            const firstTax = document.getElementById("tax").textContent ;
            const firstTaxNumber = parseFloat(firstTax) + 2 ;
            document.getElementById("tax").innerHTML = firstTaxNumber ;
            const totalPrice = subTotalMainNumber + firstTaxNumber ;
            document.getElementById("main-price").innerHTML = totalPrice ;
  }
})
//  price minus btn bottom 
const minusBtnB = document.getElementById("2nd-minusBtnB")
minusBtnB.addEventListener("click" , function(){
   const minusValue =document.getElementById("first-iPhone-price").textContent ;
   const minusValueNumber = parseFloat(minusValue);
   var outputMinusPrice = minusValueNumber - 1 ;
   if( 1 <= outputMinusPrice ){
   document.getElementById("first-iPhone-price").innerHTML = outputMinusPrice;
   var mainPrice = document.getElementById("iPhoneMainPrice").textContent ;
   var mainPriceNumber = parseFloat(mainPrice) - 1219 ;
   document.getElementById("iPhoneMainPrice").innerHTML = mainPriceNumber ;
   var subTotal = document.getElementById("subtotal").textContent ;
   var subtotalNumber = parseFloat(subTotal) - 1219 ;
   document.getElementById("subtotal").innerHTML = subtotalNumber ;
   const firstTax = document.getElementById("tax").textContent ;
   const firstTaxNumber = parseFloat(firstTax) - 2 ;
   document.getElementById("tax").innerHTML = firstTaxNumber ;
   const totalPrice = subtotalNumber + firstTaxNumber ;
   document.getElementById("main-price").innerHTML = totalPrice ;
   }
})
// TOP IS CORD ONE AREA 
const SEplusBtnA = document.getElementById("2nd-plusBtnA")  ;
SEplusBtnA.addEventListener("click" , function(){
   const plusValue = document.getElementById("plus-value").textContent ;
   const plusValueNumber = parseFloat(plusValue) + 1 ;
   if( plusValueNumber <= 15  ){
   document.getElementById("plus-value").innerHTML = plusValueNumber ;
   const SEplusBtnAIn = document.getElementById("SEplusValue").textContent ; 
   const SEplusBtnAInNumber = parseFloat(SEplusBtnAIn) + 190 ;
   document.getElementById("SEplusValue").innerHTML = SEplusBtnAInNumber;
   const subTotalB = document.getElementById("subtotal").textContent ;
   const subTotalBNumber = parseFloat(subTotalB) + 190 ;
   document.getElementById("subtotal").innerHTML = subTotalBNumber ;
   const firstTax = document.getElementById("tax").textContent ;
   const firstTaxNumber = parseFloat(firstTax) + 2 ;
   document.getElementById("tax").innerHTML = firstTaxNumber ;
   const totalPrice = subTotalBNumber + firstTaxNumber ;
   document.getElementById("main-price").innerHTML = totalPrice ;
   }
         })
const SEMinusBtnB = document.getElementById("2nd-minus-btn-B") ;
SEMinusBtnB.addEventListener("click" , function (){
   const minusValue = document.getElementById("plus-value").textContent ;
   const minusValueNumber = parseFloat(minusValue) - 1 ;
   if( 1 <= minusValueNumber ){
   document.getElementById("plus-value").innerHTML = minusValueNumber ;
   const SEplusValue = document.getElementById("SEplusValue").textContent ;
   const SEplusValueNumber = parseFloat(SEplusValue) - 190 ;
   document.getElementById("SEplusValue").innerHTML = SEplusValueNumber ;
   const subTotalBA = document.getElementById("subtotal").textContent ;
   const subTotalBNumberA = parseFloat(subTotalBA) - 190 ;
   document.getElementById("subtotal").innerHTML = subTotalBNumberA ;
   const firstTax = document.getElementById("tax").textContent ;
   const firstTaxNumber = parseFloat(firstTax) - 2 ;
   document.getElementById("tax").innerHTML = firstTaxNumber ;
   const totalPrice = subTotalBNumberA + firstTaxNumber ;
   document.getElementById("main-price").innerHTML = totalPrice ;
   }
})