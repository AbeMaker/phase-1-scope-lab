var customerName = "bob"; //variale in global scope

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer='maybe bob';
}


const leastFavoriteCustomer="Anyang Maker";//global scope
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="Anyang Maker";
}