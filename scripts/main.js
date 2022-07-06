import Truck from "./truck.js"
import Order from "./order.js"
import FormHandler from "./formhandler.js"
import CheckList from "./checklist.js"


const form_selector = '[rel="js-coffee-order"]'
const rate_selector = '[rel="js-coffee-rate"]'
const range_selector = '[rel="js-coffee-range"]'
const reset_selector = '[rel="js-reset-button"]'
const checklist_selector = '[rel="js-orders-checklist"]'

let myTruck = new Truck("01")
let formHandler = new FormHandler(form_selector)
let checkList = new CheckList(checklist_selector)

formHandler.addSubmitHandler(function(data){
    myTruck.createOrder.call(myTruck, data)
    checkList.addRow.call(checkList, data)
});
formHandler.addRateHandler($(rate_selector), $(range_selector));
formHandler.addResetHandler($(reset_selector))



// console.log("🚀 ~ file: main.js ~ line 5 ~ truck", myTruck)

// let order1 = new Order("dima@gmail.com", "small coffee")
// let order2 = new Order("artem@gmail.com", "big coffee")

// myTruck.createOrder(order1)
// myTruck.createOrder(order2)

// myTruck.printOrders()
// myTruck.deliverOrder(order1.email)
// myTruck.printOrders()
