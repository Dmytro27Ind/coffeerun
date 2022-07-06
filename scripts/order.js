

export default class Order{
    #email = "email"
    #coffee = "coffee"

    constructor(email, coffee){
        this.#email = email
        this.#coffee = coffee
    }

    get email(){
        return this.#email
    }

    get coffee(){
        return this.#coffee
    }
}