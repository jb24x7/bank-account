let accounts = [];

let makeAccount = function (name, deposit) {
  let newAccount = {
    Name: name,
    Balance: deposit,
  }
  return newAccount;
}

let editAccount1 = function (name) {
  const balance = document.querySelector("#balance");
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i].Name === name) {
      balance.innerText = parseInt(accounts[i].Balance);
    }
  }
}

let editAccount2 = function (name) {
  const balance = document.querySelector("#balance");
  const deposit = document.querySelector("#deposit");
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i].Name === name) {
      accounts[i].Balance = parseInt(accounts[i].Balance) + parseInt(deposit.value);
      balance.innerText = accounts[i].Balance;
    }
  }
}

let editAccount3 = function (name) {
  const balance = document.querySelector("#balance");
  const withdraw = document.querySelector("#withdraw");
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i].Name === name) {
      accounts[i].Balance = parseInt(accounts[i].Balance) - parseInt(withdraw.value);
      balance.innerText = accounts[i].Balance;
    }
  }
}

window.onload = function () {
  const newAccountName = document.querySelector("#name");
  const initialDeposit = document.querySelector("#initial");
  const currentAccountName = document.querySelector("#account-name");
  const makeButton = document.querySelector("#make");
  const beepBoop = document.querySelector("#transation");
  const deposit = document.querySelector("#depobut");
  const withdraw = document.querySelector("#withbut");
  makeButton.onclick = function () {
    accounts.push(makeAccount(newAccountName.value, initialDeposit.value));
    console.log(accounts);
  }
  beepBoop.onclick = function () {
    editAccount1(currentAccountName.value)
  };
  deposit.onclick = function () {
    editAccount2(currentAccountName.value)
  };
  withdraw.onclick = function () {
    editAccount3(currentAccountName.value)
  };
}