const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();

const orderScheme = new Schema({
    email: String,
    coffee: String,
    size: String,
    flavor: String,
    strength: {
        type: Number,
        min: 0,
        max: 100
    },
}, {versionKey: false})

const Order = mongoose.model("order", orderScheme);

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb+srv://admin:admin27@studentcoffee.fptku.mongodb.net/student-coffee?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }, function(error){
    if(error)
        return console.log(error);

    app.listen(3000, function(){
        console.log("The server is waiting for a connection ...");
    });
});

app.get("/api/orders/:email", function(request, response){
    const email = request.params.email;
    Order.findOne({email: email}, function(error, order){
        if(error)
            return console.log(error);
        response.send(order);
    });
});

app.post("/api/orders", jsonParser, function (request, response) {
    if(!request.body)
        return response.sendStatus(400);

    const orderEmail = request.body.email;
    const orderCoffee = request.body.coffee;
    const orderSize = request.body.size;
    const orderFlavor = request.body.flavor;
    const orderStrength = request.body.strength;

    const order = new Order({
        email: orderEmail,
        coffee: orderCoffee,
        size: orderSize,
        flavor: orderFlavor,
        strength: orderStrength
    });

    order.save(function(error){
        if(error)
            return console.log(error);
        response.send(order);
    });
});

app.get("/api/orders", function(request, response){
    Order.find({}, function(error, orders){
        if(error)
            return console.log(error);
        response.send(orders)
    });
});

app.delete("/api/orders/:email", function(request, response){
    const email = request.params.email;

    Order.findOneAndDelete({email: email}, function(error, order){
        if(error)
            return console.log(error);
        response.send(order);
    });
});