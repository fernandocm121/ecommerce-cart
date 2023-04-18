export const priceInstallment = (price) => {
  return Number(price / 6, 2).toFixed(2)
}