import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const tripSchema=new mongoose.Schema({
    destination:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    activities:[activitySchema]
},{
    timestamps:true
});

const Trip=mongoose.model('Trip',tripSchema)

export default Trip