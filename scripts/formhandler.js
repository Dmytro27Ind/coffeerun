
export default class FormHandler{
    constructor(selector) {
        if (!selector){
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector)
        // console.log("🚀 ~ file: formhandler.js ~ line 9 ~ FormHandler ~ constructor ~ $formElement", this.$formElement)
        if(this.$formElement.length === 0){
            throw new Error('Could not find element with selector: ' + selector)
        }
    }

    addSubmitHandler(fn){
        console.log('Setting submit handler for form')
        this.$formElement.on('submit', function(event){
            event.preventDefault();

            let data = {}
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value
            })
            console.log("🚀 ~ file: formhandler.js ~ line 22 ~ FormHandler ~ this.$formElement.on ~ data", data)
            fn(data)
        })
    }
}