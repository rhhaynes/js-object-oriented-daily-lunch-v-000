let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let mealId = 0;
class Meal {
  constructor(title, price){
    this.id = ++mealId;
    this.title = title;
    this.price = price;
  }
}