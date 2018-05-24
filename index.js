let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
class Neighborhood {
  constructor(name){
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
  }
  deliveries(){}
  customers(){}
  meals(){}
}

let customerId = 0;
class Customer {
  constructor(name, neighborhoodId){
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  }
  deliveries(){}
  meals(){}
  totalSpend(){}
}

let mealId = 0;
class Meal {
  constructor(title, price){
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }
}

let deliveryId = 0;
class Delivery {
  constructor(mealId, neighborhoodId, customerId){
    this.id = ++deliveryId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    store.deliveries.push(this);
  }
  meal(){ return store.meals.filter( m => m.id === this.mealId ) }
  customer(){ return store.customers.filter( c => c.id === this.customerId ) }
  neighborhood(){ return store.neighborhoods.filter( n => n.id === this.neighborhoodId ) }ne
}