

export default class RemoteDataStore{
    #serverUrl = ""

    constructor(url) {
        if(!url)
            throw new Error('No remote URL supplied.');
        this.#serverUrl = url;
    }

    //* return Deferred object after .done() or .fail()
    add(key, val){
        // $.post(this.#serverUrl, val, (serverResponse) => {
        //     console.log(serverResponse)
        // });
        return $.ajax({
            type: "POST",
            url: this.#serverUrl,
            data: JSON.stringify(val),
            contentType : 'application/json',
        }).done(function(data){
            console.log(data)
        }).fail(() => {
            alert("Failed to add order in database")
        })
    }

    //* without callback. getAll() return Deferred object. But you can use callback
    getAll(cb){
        return $.get(this.#serverUrl, (res) => {
            // check for callback parameter
            if(cb)
                cb(res)
        })
    }

    get(key, cb){
        return $.get(this.#serverUrl + '/' + key, (res) => {
            // check for callback parameter
            if (cb){
                console.log(res)
                cb(res)
            }
        })
    }

    remove(key){
        return $.ajax(this.#serverUrl + '/' + key, {
            type: "DELETE"
        }).done((data) => {
            console.log(data)
        }).fail(() => {
            alert("Failed to delete order from database")
        })
    }
}