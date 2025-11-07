"use strict";

const fundAccount = document.querySelector(".daash-head1");
const transferFund = document.querySelector(".transfer");
const history = document.querySelector(".History");
const addPage = document.querySelector(".payment--page2");
const withDraw = document.querySelector(".payment--page3");
const transferPage = document.querySelector(".payment--page");
const cancel = document.querySelectorAll(".cancle i");

fundAccount.addEventListener("click", function () {
  if (addPage.style.display === "block") {
    addPage.style.display = "none";
  } else {
    addPage.style.display = "block";
  }
});

transferFund.addEventListener("click", function () {
  if (transferPage.style.display === "block") {
    transferPage.style.display = "none";
  } else {
    transferPage.style.display = "block";
  }
});

history.addEventListener("click", function () {
  if (withDraw.style.display === "block") {
    withDraw.style.display = "none";
  } else {
    withDraw.style.display = "block";
  }
});

cancel.forEach((i) => {
  i.addEventListener("click", function () {
    if (
      addPage.style.display === "block" ||
      transferPage.style.display === "block" ||
      withDraw.style.display === "block"
    ) {
      addPage.style.display = "none";
      transferPage.style.display = "none";
      withDraw.style.display = "none";
    } else {
      addPage.style.display = "block";
      transferPage.style.display = "block";
      withDraw.style.display = "block";
    }
  });
});

const chooseAccount = document.getElementById("chooseaccount");
const amount = document.querySelector(".amountInput");
const submitButton = document.querySelector(".submit");
const balance1 = document.querySelector(".balance1 span");
const balance2 = document.querySelector(".balance2 span");
const submitButton1 = document.querySelector(".submit1");
const alert = document.querySelector(".alert1");

let balanceAccount = 0;
let savingAccount = 0;

submitButton.addEventListener("click", function () {
  const selectValue = chooseAccount.value;
  const balanceSpan = Number(amount.value);

  if (selectValue === "savings") {
    savingAccount += balanceSpan;
    balance2.textContent = `$` + savingAccount;
  } else if (selectValue === "checking") {
    balanceAccount += balanceSpan;
    balance1.textContent = `$` + balanceAccount;
  }
});

submitButton1.addEventListener("click", function () {
  const selectValue = chooseAccount.value;
  const balanceSpan = Number(amount.value);

  if (!amount.value || isNaN(balanceSpan) || balanceSpan <= 0) {
    alert("Enter a valid amount");
    return;
  }

  if (selectValue === "savings") {
    if (balanceSpan <= savingAccount) {
      savingAccount -= balanceSpan;
      balance2.textContent = `$` + savingAccount;
    } else {
      alert(alert);
    }
  } else if (selectValue === "checking") {
    if (balanceSpan <= balanceAccount) {
      balanceAccount -= balanceSpan;
      balance1.textContent = `$` + balanceAccount;
    } else {
      alert(alert);
    }
  }
});
