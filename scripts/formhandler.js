
export default class FormHandler{
    constructor(selector) {
        if (!selector){
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector)
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
            fn(data)
            console.log(data)

            this.reset()
            this.querySelector('[rel="js-coffee-rate"]').textContent = this.querySelector("#strengthLevel").getAttribute("value")
            this.elements[0].focus()
        })
    }

    addResetHandler($resetButton){
        console.log('Setting reset handler for form')
        $resetButton.on('click', function(event){
            document.querySelector('[rel="js-coffee-rate"]').textContent = document.querySelector("#strengthLevel").getAttribute("value")
        })
    }

    addRateHandler($rateElement, $rangeElement){
        console.log('Setting rate handler for form')
        $rateElement[0].textContent = $rangeElement[0].value

        $rangeElement.on('input', function(event){
            $rateElement[0].textContent = $rangeElement[0].value;
        })
    }
}