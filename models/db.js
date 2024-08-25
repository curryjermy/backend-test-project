const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    cropName: {
        type: String
    },
    cropWeight:{
        type: String
    }

})



module.exports=mongoose.model("khari",formSchema);

