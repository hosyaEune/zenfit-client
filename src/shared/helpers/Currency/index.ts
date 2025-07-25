export class Currency {
  static getPriceWithCurrency(price: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }
}
