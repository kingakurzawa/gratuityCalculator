const price = document.querySelector('#price');
const persons = document.querySelector('#persons');
const gratuity = document.querySelector('#gratuity');
const button = document.querySelector('.calc');
const error = document.querySelector('.error');
const info = document.querySelector('.info');
const amount = document.querySelector('.amount');
const currencyInfo = document.querySelector('.currency');
const currencyBox = document.querySelector('#currency');


const checkContent = ()=> {
  if (price.value === "" || persons.value === "" || gratuity.value == 0 || currencyBox.value === "" ) {
    error.textContent = 'Complete all bars';
    info.style.display = 'none';
  } else {
    error.textContent = "";
    calculateTip();
  }
}
const chooseCurrency = ()=> {
  currencyInfo.textContent = currencyBox.value;
  if (currencyInfo.textContent === "zł" || currencyInfo.textContent === "kč") {
    amount.style.marginTop = "5px"
  } else {
    amount.style.marginTop = "0"
  }
}
const calculateTip = ()=> {
  const allPrice = parseFloat(price.value);
  const allPeople = parseInt(persons.value);
  const tip = parseFloat(gratuity.value);
  const sum = (allPrice * tip) / allPeople;
  
  info.style.display = 'flex';
  amount.style.display = 'block';
  amount.textContent = sum.toFixed(2);
  chooseCurrency();
}



button.addEventListener('click', checkContent)
