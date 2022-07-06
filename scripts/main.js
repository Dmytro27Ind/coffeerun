import Truck from "./truck.js"
import Order from "./order.js"


let myTruck = new Truck("01")
console.log("🚀 ~ file: main.js ~ line 5 ~ truck", myTruck)

let order1 = new Order("dima@gmail.com", "small coffee")
let order2 = new Order("artem@gmail.com", "big coffee")

myTruck.createOrder(order1)
myTruck.createOrder(order2)

myTruck.printOrders()
myTruck.deliverOrder(order1.email)
myTruck.printOrders()
