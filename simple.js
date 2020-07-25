function handleProductChange(product, isIncrease){
  const productInput = document.getElementById(product +'-count');
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true){
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0){
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  let productTotal = 0;
  if (product == 'phone'){
    productTotal = productNewCount * 1219;
  }
  if (product == 'case'){
    productTotal = productNewCount * 59;
  }
  document.getElementById(product +'-total').innerText = '$ ' +productTotal;
  calculateTotal();
}
function calculateTotal(){
  const phoneCount = getInputValue('phone');
  const caseCount = getInputValue('case');
  const totalPrice = phoneCount * 1219 + caseCount * 59;

  document.getElementById('total-price').innerText = '$' + totalPrice;

  const tax = Math.round(totalPrice * 0.01);
  document.getElementById('tax-amount').innerText = '$ ' + tax;
  
  const grandTotal = totalPrice + tax;
  document.getElementById('grand-total').innerText = '$ ' + grandTotal;  

}
function getInputValue(product){
  const productInput = document.getElementById(product +'-count').value;
  const productCount = parseInt(productInput);
  return productCount;
}

document.getElementById('checkOutBtn').addEventListener('click', function(){
  const frontPage = document.getElementById('frontPage');
  frontPage.style.display = 'none';
  const orderDone = document.getElementById('checked');
  orderDone.style.display = 'block';
})
