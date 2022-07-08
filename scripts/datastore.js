

class DataStore{
    #data = {}

    constructor(){
        // console.log("creating DataStore object")
    }

    #promiseResolvedWith(value){
        var promise = new Promise((resolve, reject) => {
            resolve(value)
        });
        return promise
    }

    add(key, val){
        var promise = new Promise(function(resolve, reject){
            this.#data[key] = val
            resolve(null)
        }.bind(this))
        return promise
    }

    get(key){
        return this.#promiseResolvedWith(this.#data[key])
    }

    getAll(){
        return this.#promiseResolvedWith(this.#data)
    }

    remove(key){
        return new Promise(function(resolve, reject){
            delete this.#data[key]
            resolve(null)
        }.bind(this))
    }
}

export {DataStore}