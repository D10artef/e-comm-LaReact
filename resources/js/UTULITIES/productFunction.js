export function showPriceWithCurrency(price, currency = 'MGA') {
  return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: currency,
  }).format(price);
}

export function getPriceReduced(price, discount){
  return price - (price * discount) / 100;
}