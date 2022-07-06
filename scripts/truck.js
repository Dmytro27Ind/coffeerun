import { DataStore } from "./datastore.js"

export default class Truck {
    #db = new DataStore()
    #truckId = "id"

    constructor(truckId) {
        this.#truckId = truckId
    }

    get truckId() {
        return this.#truckId
    }

    createOrder(order) {
        console.log('Adding order "' + order.coffee + '" for customer: ' + order.email)
        this.#db.add(order.email, order.coffee)
    }

    deliverOrder(customerId) {
        console.log('Delivering order for customer: ' + customerId)
        this.#db.remove(customerId)
    }

    printOrders() {
        let customersId = Object.keys(this.#db.getAll())

        console.log('Truck #' + this.truckId + ' has pending orders: ')
        customersId.forEach((id) => {
            console.log(this.#db.get(id));
        });
    }
}