function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid; //загальна вартість замовлення
  //загальна вартість усіх замовлених дроїдів
  if (totalPrice < customerCredits) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    return "Insufficient funds!";
  }
}
