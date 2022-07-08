
export default class Truck {
    #db = undefined
    #truckId = "id"

    constructor(truckId, db) {
        this.#truckId = truckId
        this.#db = db
    }

    get truckId() {
        return this.#truckId
    }

    createOrder(order) {
        console.log('Adding order "' + order.coffee + '" for customer: ' + order.email)
        return this.#db.add(order.email, order)
    }

    deliverOrder(customerId) {
        console.log('Delivering order for customer: ' + customerId)
        return this.#db.remove(customerId)
    }

    // printOrders() {
    //     let customersId = Object.keys(this.#db.getAll())

    //     console.log('Truck #' + this.truckId + ' has pending orders: ')
    //     customersId.forEach((id) => {
    //         console.log(this.#db.get(id));
    //     });
    // }
}