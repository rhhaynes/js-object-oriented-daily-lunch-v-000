let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let meanId = 0;
class Meal {
  constructor(title, price){
    this.id = ++meanId;
    this.title = title;
    this.price = price;
  }
}