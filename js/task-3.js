function getElementWidth(content, padding, border) {
  return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}

function checkForSpam(message) {
  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    return true;
  } else {
    return false;
  }
}
