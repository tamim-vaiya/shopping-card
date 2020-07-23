// plusButton and event handler
const plusButton1 = document.getElementById('plusButton1');
plusButton1.addEventListener('click', function(){
  const updateValue = document.getElementById('updateValue1').value;
  const updateValueNum = parseFloat(updateValue);
  let newValue = updateValueNum + 1;
  document.getElementById('updateValue1').value = newValue;

  const currentPrice1 = document.getElementById('currentPrice1').innerText;
  const currentPrizeNumber = parseFloat(currentPrice1);
  const currentValue = document.getElementById('updateValue1').value;
  let newPrice = currentValue * 1219;
  document.getElementById('currentPrice1').innerText = newPrice;

  const subTotal = document.getElementById('subtotal').innerText;
  const subTotalNumber = parseFloat(subTotal);
  const price1 = document.getElementById('currentPrice1').innerText;
  const price1Number = parseFloat(price1);
  const price2 = document.getElementById('currentPrice2').innerText;
  const price2Number = parseFloat(price2);
  let newSubTotal = price1Number + price2Number;
  document.getElementById('subtotal').innerText = newSubTotal;

  document.getElementById('total').innerText = newSubTotal;


})
const plusButton2 = document.getElementById('plusButton2');
plusButton2.addEventListener('click', function(){
  const updateValue = document.getElementById('updateValue2').value;
  const updateValueNum = parseFloat(updateValue);
  let newValue = updateValueNum + 1;
  document.getElementById('updateValue2').value = newValue;

  const currentPrice2 = document.getElementById('currentPrice2').innerText;
  const currentPrizeNumber = parseFloat(currentPrice1);
  const currentValue = document.getElementById('updateValue2').value;
  let newPrice = currentValue * 59;
  document.getElementById('currentPrice2').innerText = newPrice;

  const subTotal = document.getElementById('subtotal').innerText;
  const subTotalNumber = parseFloat(subTotal);
  const price1 = document.getElementById('currentPrice1').innerText;
  const price1Number = parseFloat(price1);
  const price2 = document.getElementById('currentPrice2').innerText;
  const price2Number = parseFloat(price2);
  let newSubTotal = price1Number + price2Number;
  document.getElementById('subtotal').innerText = newSubTotal;

  document.getElementById('total').innerText = newSubTotal;
})
// minus button and event handler
const minusButton1 = document.getElementById('minusButton1');
minusButton1.addEventListener('click', function(){
  const updateValue = document.getElementById('updateValue1').value;
  const updateValueNum = parseFloat(updateValue);
  if (updateValueNum == 0){
    let newValue = 00;
    document.getElementById('updateValue1').value = newValue;
  } else {
    let newValue = updateValueNum - 1;
    document.getElementById('updateValue1').value = newValue;
  }
  const currentPrice1 = document.getElementById('currentPrice1').innerText;
  const currentPrizeNumber = parseFloat(currentPrice1);
  const currentValue = document.getElementById('updateValue1').value;
  let newPrice = currentValue * 1219;
  document.getElementById('currentPrice1').innerText = newPrice;

  const subTotal = document.getElementById('subtotal').innerText;
  const subTotalNumber = parseFloat(subTotal);
  const price1 = document.getElementById('currentPrice1').innerText;
  const price1Number = parseFloat(price1);
  const price2 = document.getElementById('currentPrice2').innerText;
  const price2Number = parseFloat(price2);
  let newSubTotal = price1Number + price2Number;
  document.getElementById('subtotal').innerText = newSubTotal;

  document.getElementById('total').innerText = newSubTotal;
})
const minusButton2 = document.getElementById('minusButton2');
minusButton2.addEventListener('click', function(){
  const updateValue = document.getElementById('updateValue2').value;
  const updateValueNum = parseFloat(updateValue);
  if (updateValueNum == 0){
    let newValue = 00;
    document.getElementById('updateValue2').value = newValue;
  } else {
    let newValue = updateValueNum - 1;
    document.getElementById('updateValue2').value = newValue;
  }
  const currentPrice2 = document.getElementById('currentPrice2').innerText;
  const currentPrizeNumber = parseFloat(currentPrice1);
  const currentValue = document.getElementById('updateValue2').value;
  let newPrice = currentValue * 59;
  document.getElementById('currentPrice2').innerText = newPrice;

  const subTotal = document.getElementById('subtotal').innerText;
  const subTotalNumber = parseFloat(subTotal);
  const price1 = document.getElementById('currentPrice1').innerText;
  const price1Number = parseFloat(price1);
  const price2 = document.getElementById('currentPrice2').innerText;
  const price2Number = parseFloat(price2);
  let newSubTotal = price1Number + price2Number;
  document.getElementById('subtotal').innerText = newSubTotal;
  document.getElementById('total').innerText = newSubTotal;
})








