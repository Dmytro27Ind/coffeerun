

export default class RemoteDataStore{
    #serverUrl = ""

    constructor(url) {
        if(!url)
            throw new Error('No remote URL supplied.');
        this.#serverUrl = url;
    }

    add(key, val){
        // $.post(this.#serverUrl, val, (serverResponse) => {
        //     console.log(serverResponse)
        // });
        $.ajax({
            type: "POST",
            url: this.#serverUrl,
            data: JSON.stringify(val),
            contentType : 'application/json',
        }).done(function(data){
            console.log(data)
        }).fail(() => {
            alert("Fail to add order in database")
        })
    }

    getAll(){
        $.get(this.#serverUrl, (res) => {
            console.log(res)
        })
    }
}