import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password : {
        type:String,
        required: true,
    }
}, {
    timestamps: true //add createdAt and updatedAt fields to the schema
});

export default mongoose.model("User", userSchema);