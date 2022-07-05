import {DataStore} from "./datastore.js"

export default class Truck{
    constructor(truckId){
        this.truckId = truckId
        this.db = new DataStore()
    }

    createOrder(order){
        console.log('Adding order for customer ' + order.emailAddress)
        this.db.add(order.emailAddress, order.coffe)
    }

    deliverOrder(customerId){
        console.log('Delivering order for customer' + customerId)
        this.db.remove(customerId)
    }

    printOrders(){
        let customersId = Object.keys(this.db.getAll())

        console.log('Truck #' + this.truckId + ' has pending orders: ')
        customersId.forEach((id) => {
            console.log(this.db.get(id));
        });
    }
}

// let truck = new Truck("01")
// console.log(truck)

// let order1 = {emailAddress: "dima@gmail.com", coffe: "small coffee"}
// let order2 = {emailAddress: "artem@gmail.com", coffe: "big coffee"}
// truck.createOrder(order1)
// truck.createOrder(order2)
// console.log(truck.db.getAll())
// truck.printOrders()

// truck.deliverOrder(order1.emailAddress)
// console.log(truck.db.getAll())
// truck.printOrders()