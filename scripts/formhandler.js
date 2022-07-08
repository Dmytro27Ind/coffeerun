
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

        // First example with anonymous function and .bind(this)
        this.$formElement.on('submit', function(event){
            event.preventDefault();

            let data = {}
            $(this.$formElement[0]).serializeArray().forEach(function(item) {
                data[item.name] = item.value
            })
            fn(data)

            this.resetForm();
            // this.$formElement[0].elements[0].focus()
        }.bind(this))
    }

    addResetHandler($resetButton){
        console.log('Setting reset handler for form')
        // Second example with lamda function
        $resetButton.on('click', (event) => {
            this.resetForm();
        })
    }

    resetForm(){
        this.$formElement[0].reset()
        this.$formElement[0].querySelector('[rel="js-coffee-rate"]').textContent = this.$formElement[0].querySelector("#strengthLevel").getAttribute("value")
    }

    addRateHandler($rateElement, $rangeElement){
        console.log('Setting rate handler for form')
        $rateElement[0].textContent = $rangeElement[0].value

        $rangeElement.on('input', function(event){
            $rateElement[0].textContent = $rangeElement[0].value;
        })
    }

    addInputHandler(fn){
        console.log('Setting input handler for form')
        this.$formElement.on('input', '[name="email"]', (event) => {
            var email = event.target.value;
            if(fn(email))
                event.target.setCustomValidity('');
            else
                event.target.setCustomValidity(email + ' is not a student email address');
        })
    }
}