const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut")



connect.then(() => {
    console.log("Database connected successfully");
    
})

.catch(() => {
    console.log("Database cannot be connected");
    
})


const LoginSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    }

});



const collection = new mongoose.model("Users",LoginSchema)

module.exports = collection;