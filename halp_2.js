let stockPrices = { A: 70, B: 132, C: 82, D: 51, E: 149, F: 96 };

function updateCashOnHand_A() {
  //   let sample = cashOnHand;

  let totalBuyCost = 0;
  let totalSellRevenue = 0;
  totalBuyCost += stocks["A"].change * stockPrices["A"];
  totalSellRevenue += stocks["A"].change * stockPrices["A"];
  cashOnHand += totalSellRevenue - totalBuyCost;
  // cashOnHand = sample;
  // console.log(sample + " " + cashOnHand);
  document.getElementById("cash-on-hand").innerText = cashOnHand.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  );
  localStorage.setItem("cashOnHand", cashOnHand);
  var check = parseInt(localStorage.getItem("cashOnHand"));
  console.log(check);
}

function updateCashOnHand_B() {
  let totalBuyCost = 0;
  let totalSellRevenue = 0;
  totalBuyCost += stocks["B"].change * stockPrices["B"];
  totalSellRevenue += stocks["B"].change * stockPrices["B"];
  cashOnHand += totalSellRevenue - totalBuyCost;
  document.getElementById("cash-on-hand").innerText = cashOnHand.toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );
  localStorage.setItem("cashOnHand", cashOnHand);
  var check = parseInt(localStorage.getItem("cashOnHand"));
  console.log(check);
}

function updateCashOnHand_C() {
  let totalBuyCost = 0;
  let totalSellRevenue = 0;
  totalBuyCost += stocks["C"].change * stockPrices["C"];
  totalSellRevenue += stocks["C"].change * stockPrices["C"];
  cashOnHand += totalSellRevenue - totalBuyCost;
  document.getElementById("cash-on-hand").innerText = cashOnHand.toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );
  localStorage.setItem("cashOnHand", cashOnHand);
  var check = parseInt(localStorage.getItem("cashOnHand"));
  console.log(check);
}

function updateCashOnHand_D() {
  let totalBuyCost = 0;
  let totalSellRevenue = 0;
  totalBuyCost += stocks["D"].change * stockPrices["D"];
  totalSellRevenue += stocks["D"].change * stockPrices["D"];
  cashOnHand += totalSellRevenue - totalBuyCost;
  document.getElementById("cash-on-hand").innerText = cashOnHand.toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );
  localStorage.setItem("cashOnHand", cashOnHand);
  var check = parseInt(localStorage.getItem("cashOnHand"));
  console.log(check);
}

function updateCashOnHand_E() {
  let totalBuyCost = 0;
  let totalSellRevenue = 0;
  totalBuyCost += stocks["E"].change * stockPrices["E"];
  totalSellRevenue += stocks["E"].change * stockPrices["E"];
  cashOnHand += totalSellRevenue - totalBuyCost;
  document.getElementById("cash-on-hand").innerText = cashOnHand.toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );
  localStorage.setItem("cashOnHand", cashOnHand);
  var check = parseInt(localStorage.getItem("cashOnHand"));
  console.log(check);
}

function updateCashOnHand_F() {
  let totalBuyCost = 0;
  let totalSellRevenue = 0;
  totalBuyCost += stocks["F"].change * stockPrices["F"]];
  totalSellRevenue += stocks["F"].change * stockPrices["F"];
  cashOnHand += totalSellRevenue - totalBuyCost;
  document.getElementById("cash-on-hand").innerText = cashOnHand.toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );
  localStorage.setItem("cashOnHand", cashOnHand);
  var check = parseInt(localStorage.getItem("cashOnHand"));
  console.log(check);
}

function updateHoldA() {
  document.getElementById("hold-a").innerText =
    stocks["A"].hold + stocks["A"].change;
  stocks["A"].hold += stocks["A"].change;
  // Convert the stocks object to a JSON string
  const stocksJson = JSON.stringify(stocks);

  // Push the JSON string to the localStorage with the key "stocks"
  localStorage.setItem("stocks", stocksJson);
}
function updateHoldB() {
  document.getElementById("hold-b").innerText =
    stocks["B"].hold + stocks["B"].change;
  stocks["B"].hold += stocks["B"].change;
  // Convert the stocks object to a JSON string
  const stocksJson = JSON.stringify(stocks);

  // Push the JSON string to the localStorage with the key "stocks"
  localStorage.setItem("stocks", stocksJson);
}
function updateHoldC() {
  document.getElementById("hold-c").innerText =
    stocks["C"].hold + stocks["C"].change;
  stocks["C"].hold += stocks["C"].change;
  // Convert the stocks object to a JSON string
  const stocksJson = JSON.stringify(stocks);

  // Push the JSON string to the localStorage with the key "stocks"
  localStorage.setItem("stocks", stocksJson);
}
function updateHoldD() {
  document.getElementById("hold-d").innerText =
    stocks["D"].hold + stocks["D"].change;
  stocks["D"].hold += stocks["D"].change;
  // Convert the stocks object to a JSON string
  const stocksJson = JSON.stringify(stocks);

  // Push the JSON string to the localStorage with the key "stocks"
  localStorage.setItem("stocks", stocksJson);
}
function updateHoldE() {
  document.getElementById("hold-e").innerText =
    stocks["E"].hold + stocks["E"].change;
  stocks["E"].hold += stocks["E"].change;
  // Convert the stocks object to a JSON string
  const stocksJson = JSON.stringify(stocks);

  // Push the JSON string to the localStorage with the key "stocks"
  localStorage.setItem("stocks", stocksJson);
}
function updateHoldF() {
  document.getElementById("hold-f").innerText =
    stocks["F"].hold + stocks["F"].change;
  stocks["F"].hold += stocks["F"].change;
  // Convert the stocks object to a JSON string
  const stocksJson = JSON.stringify(stocks);

  // Push the JSON string to the localStorage with the key "stocks"
  localStorage.setItem("stocks", stocksJson);
}

function changeShare_A() {
  let sample = cashOnHand;
  let changeInput = document.getElementById("change-a");
  let changeAmount = Number(changeInput.value);
  stocks["A"].change = 0;
  stocks["A"].change += changeAmount;
  if (stocks["A"].hold + stocks["A"].change >= 0) {
    cashOnHand -= changeAmount * stockPrices["A"];
    if (cashOnHand < 0) {
      cashOnHand = sample;
      changeInput.value = 0;
      alert("not enough balance");
    } else {
      changeInput.value = 0;
      updateCashOnHand_A();
      updateHoldA();
    }
  } else {
    alert("You can't sell more shares than you own!");
  }
}

function changeShare_B() {
  let sample = cashOnHand;
  let changeInput = document.getElementById("change-b");
  let changeAmount = Number(changeInput.value);
  stocks["B"].change = 0;
  stocks["B"].change += changeAmount;
  if (stocks["B"].hold + stocks["B"].change >= 0) {
    cashOnHand -= changeAmount * stockPrices["B"];
    if (cashOnHand < 0) {
      cashOnHand = sample;
      changeInput.value = 0;
      alert("not enough balance");
    } else {
      changeInput.value = 0;
      updateCashOnHand_B();
      updateHoldB();
    }
  } else {
    alert("You can't sell more shares than you own!");
  }
}

function changeShare_C() {
  let sample = cashOnHand;
  let changeInput = document.getElementById("change-c");
  let changeAmount = Number(changeInput.value);
  stocks["C"].change = 0;
  stocks["C"].change += changeAmount;
  if (stocks["C"].hold + stocks["C"].change >= 0) {
    cashOnHand -= changeAmount * stockPrices["C"];
    if (cashOnHand < 0) {
      cashOnHand = sample;
      changeInput.value = 0;
      alert("not enough balance");
    } else {
      changeInput.value = 0;
      updateCashOnHand_C();
      updateHoldC();
    }
  } else {
    alert("You can't sell more shares than you own!");
  }
}

function changeShare_D() {
  let sample = cashOnHand;
  let changeInput = document.getElementById("change-d");
  let changeAmount = Number(changeInput.value);
  stocks["D"].change = 0;
  stocks["D"].change += changeAmount;
  if (stocks["D"].hold + stocks["D"].change >= 0) {
    cashOnHand -= changeAmount * stockPrices["D"];
    if (cashOnHand < 0) {
      cashOnHand = sample;
      changeInput.value = 0;
      alert("not enough balance");
    } else {
      changeInput.value = 0;
      updateCashOnHand_D();
      updateHoldD();
    }
  } else {
    alert("You can't sell more shares than you own!");
  }
}

function changeShare_E() {
  let sample = cashOnHand;
  let changeInput = document.getElementById("change-e");
  let changeAmount = Number(changeInput.value);
  stocks["E"].change = 0;
  stocks["E"].change += changeAmount;
  if (stocks["E"].hold + stocks["E"].change >= 0) {
    cashOnHand -= changeAmount * stockPrices["E"];
    if (cashOnHand < 0) {
      cashOnHand = sample;
      changeInput.value = 0;
      alert("not enough balance");
    } else {
      changeInput.value = 0;
      updateCashOnHand_E();
      updateHoldE();
    }
  } else {
    alert("You can't sell more shares than you own!");
  }
}

function changeShare_F() {
  let sample = cashOnHand;
  let changeInput = document.getElementById("change-f");
  let changeAmount = Number(changeInput.value);
  stocks["F"].change = 0;
  stocks["F"].change += changeAmount;
  if (stocks["F"].hold + stocks["F"].change >= 0) {
    cashOnHand -= changeAmount * stockPrices["F"];
    if (cashOnHand < 0) {
      cashOnHand = sample;
      changeInput.value = 0;
      alert("not enough balance");
    } else {
      changeInput.value = 0;
      updateCashOnHand_F();
      updateHoldF();
    }
  } else {
    alert("You can't sell more shares than you own!");
  }
}
