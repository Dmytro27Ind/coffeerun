import Truck from "./truck.js"
import FormHandler from "./formhandler.js"
import CheckList from "./checklist.js"
import RemoteDataStore from "./remotedatastore.js"


const server_url = 'http://localhost:3000/api/orders'
const form_selector = '[rel="js-coffee-order"]'
const rate_selector = '[rel="js-coffee-rate"]'
const range_selector = '[rel="js-coffee-range"]'
const reset_selector = '[rel="js-reset-button"]'
const checklist_selector = '[rel="js-orders-checklist"]'

let remoteDS = new RemoteDataStore(server_url)
let myTruck = new Truck("01", remoteDS)
let formHandler = new FormHandler(form_selector)
let checkList = new CheckList(checklist_selector)

//* .getAll() return Deferred object (like Promise but from jQuery)
remoteDS.getAll()
.then((res) => {
    console.log(res)
    res.forEach((order) => {
        checkList.addRow(order)
    })
}, (error) => {   //* check for failed
    console.log(error.statusText)
    alert('Server unreachable, try again later.')
})

//* .getAll() with callback function
// remoteDS.getAll((res) => {
//     console.log(res)
//     res.forEach((order) => {
//         checkList.addRow(order)
//     })
// })


// formHandler.addSubmitHandler(function(data){
//     myTruck.createOrder.call(myTruck, data)
//     checkList.addRow.call(checkList, data)
// });
formHandler.addSubmitHandler((data) => {
    myTruck.createOrder(data).then(() => {
        checkList.addRow(data)
    },
    //* check for failed
    () => {
        alert('Server unreachable, try again later.')
    })
});
formHandler.addRateHandler($(rate_selector), $(range_selector));
formHandler.addResetHandler($(reset_selector))

//* or checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck))
checkList.addClickHandler((email) => {myTruck.deliverOrder(email)})
formHandler.addInputHandler(isCompanyEmail)