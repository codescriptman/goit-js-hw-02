function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

function formatMessage(message, maxLength) {
  let simbols = message.length;
  if (simbols <= maxLength) {
    return message;
  } else {
    return `${message.slice(0, maxLength)}...`;
  }
}
