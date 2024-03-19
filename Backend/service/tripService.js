import Trip from "../models/tripModel.js";

//to create trip
const createTrip=async(destination,startDate,endDate,activities)=>{
    const addTrip=await Trip.create({
        destination,startDate,endDate,activities
    })
    return addTrip
}

//to check if the trip already exist
const checkTrip=async (destination,startDate,endDate)=>{
    const existingTrip=await Trip.findOne({
        destination,
        startDate,
        endDate
    })
    return existingTrip
}

// to get all trips 
const getAllTrips = async () => {
    const trips = await Trip.find({});
    return trips;
};

//to delete trip
const deleteTrip = async (tripId) => {
    
    const result = await Trip.deleteOne({ _id: tripId });
    console.log(result)
    
    return result;
};

// to update this trip details
const updateTrip = async (tripId, updatedTripDetails) => {
    const result = await Trip.updateOne({ _id: tripId }, updatedTripDetails);
    return result;
};

// to update trip activities
const updateActivities = async (tripId, updatedActivities) => {
    const result = await Trip.updateOne({ _id: tripId }, { activities: updatedActivities });
    return result;
};

export { createTrip, checkTrip, getAllTrips,deleteTrip ,updateTrip,updateActivities};


