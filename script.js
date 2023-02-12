// cost array
const itemCosts = [5, 8, 8, 10];
const itemCounts = [0, 0, 0, 0];
const itemNames = ["Mac & Cheese", "Pasta", "Tacos", "Enchiladas"];

// obtain interactive elements / elements to dynamically modify
const increaseCounterButtons = document.querySelectorAll("i.add");
const decreaseCounterButtons = document.querySelectorAll("i.remove");
const counterValues = document.querySelectorAll(".num-housing");
const subtotalValue = document.querySelector(".total");
const clearAllButton = document.querySelector("button#clear");
const orderButton = document.querySelector("button#order");

// event listeners
increaseCounterButtons.forEach((addBtn, idx) => {
  addBtn.addEventListener("click", () => {
    const toUpdate = counterValues[idx];
    let newValue = parseInt(toUpdate.innerHTML) + 1;
    subtotalValue.innerHTML =
      parseInt(subtotalValue.innerHTML) + itemCosts[idx];
    toUpdate.innerHTML = newValue;
    itemCounts[idx] = newValue;
  });
});

decreaseCounterButtons.forEach((removeBtn, idx) => {
  removeBtn.addEventListener("click", () => {
    const toUpdate = counterValues[idx];
    let newValue = parseInt(toUpdate.innerHTML) - 1;

    if (newValue >= 0) {
      subtotalValue.innerHTML =
        parseInt(subtotalValue.innerHTML) - itemCosts[idx];
    }

    newValue = newValue < 0 ? 0 : newValue;
    toUpdate.innerHTML = newValue;
    itemCounts[idx] = newValue;
  });
});

clearAllButton.addEventListener("click", () => {
  subtotalValue.innerHTML = 0;
  counterValues.forEach((item, idx) => {
    item.innerHTML = 0;
    itemCounts[idx] = 0;
  });
});

orderButton.addEventListener("click", () => {
  if (parseInt(subtotalValue.innerHTML) === 0) {
    alert("No Items in Cart");
  } else {
    let alertMsg = "Order Placed!\n";
    itemCounts.forEach((item, idx) => {
      if (item != 0) {
        alertMsg += item + " " + itemNames[idx] + "\n";
      }
    });
    alert(alertMsg);
  }
});
