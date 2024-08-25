const mongoose = require("mongoose");

const db2Schema = new mongoose.Schema({
    nameOfProduce: {
        type: String
    },
    typeOfProduce: {
        type: String
    },
    weightOfProduce: {
        type: String
    },
    amountPaid: {
        type: String
    },
    nameOfTheBuyer: {
        type: String
    }
})

module.exports=mongoose.model("Db2",db2Schema);