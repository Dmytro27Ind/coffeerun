

class RemoteDataStore{
    constructor(url) {
        if(!url)
            throw new Error('No remote URL supplied.');
        this.#serverUrl = url;
    }

    add(key, val){
        $.post(this.serverUrl, val, (serverResponse) => {
            console.log(serverResponse)
        });
    }
}