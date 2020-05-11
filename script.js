let price = document.querySelector('#price');
let persons = document.querySelector('#persons');
let gratuity = document.querySelector('#gratuity');
let button = document.querySelector('.calc');
let error = document.querySelector('.error');
let info = document.querySelector('.info');
let amount = document.querySelector('.amount');
let currencyInfo = document.querySelector('.currency');
let currencyBox = document.querySelector('#currency');

console.log(currencyBox)
console.log(currencyInfo)
let checkContent = ()=> {
  if (price.value === "" || persons.value === "" || gratuity.value == 0 || currencyBox.value === "" ) {
    error.textContent = 'Complete all bars';
    info.style.display = 'none';
  } else {
    error.textContent = "";
    calculateTip();
  }
}
let chooseCurrency = ()=> {
  currencyInfo.textContent = currencyBox.value
  if (currencyInfo.textContent === "zł" || currencyInfo.textContent === "kč") {
    amount.style.marginTop = "5px"
  } else {
    amount.style.marginTop = "0"
  }
}
let calculateTip = ()=> {
  let allPrice = parseFloat(price.value);
  let allPeople = parseInt(persons.value);
  let tip = parseFloat(gratuity.value);
  let sum = (allPrice * tip) / allPeople;
  
  info.style.display = 'flex';
  amount.style.display = 'block';
  amount.textContent = sum.toFixed(2);
  chooseCurrency()
}



button.addEventListener('click', checkContent)
