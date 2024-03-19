import { createTrip,checkTrip,getAllTrips,deleteTrip,updateTrip,updateActivities } from "../service/tripService.js";

//to create trip
const establishJourney=async(req,res)=>{
    const{
        destination,
        startDate,
        endDate,
        activities
    }=req.body
    try {
        const existingTrip=await checkTrip(destination,startDate,endDate);
        if(existingTrip){
            return res.status(400).json({"message": "Trip already exists"})
        }else{
            console.log('hi')
        }

    const trip=await createTrip(
        destination,startDate,endDate,activities
    )
    return res.status(200).json({
        destination:trip.destination,
        startDate:trip.startDate,
        endDate:trip.endDate,
        activities:trip.activities
    })
    }
    catch (error) {
        return res.status(500).json({ 
            "message": "Internal Server Error" 
        })
    }
}



//to view all trips
const viewAllTrips = async (req, res) => {
    try {
        const trips = await getAllTrips();
        return res.status(200).json(trips);
    } catch (error) {
        return res.status(500).json({ "message": "Internal Server Error" });
    }
};

//to delete  trip
const deleteTripHandler = async (req, res) => {
    const tripId = req.params.id;
    console.log(tripId)
    try {
        const result = await deleteTrip(tripId);
        if (result.deletedCount === 0) {
            return res.status(404).json({ "message": "Trip not found" });
        }
        return res.status(200).json({ "message": "Trip deleted successfully" });
    } catch (error) {
        return res.status(500).json({ "message": "Internal Server Error" });
    }
};

//to update trip details
const updateTripHandler = async (req, res) => {
    const tripId = req.params.id;
    console.log(tripId)
    const updatedTripDetails = req.body;
    try {
        const result = await updateTrip(tripId, updatedTripDetails);
        if (result.nModified === 0) {
            return res.status(404).json({ "message": "Trip not found or no changes made" });
        }
        return res.status(200).json({ "message": "Trip updated successfully" });
    } catch (error) {
        return res.status(500).json({ "message": "Internal Server Error" });
    }
};


//to update activities
const updateActivitiesHandler = async (req, res) => {
    const tripId = req.params.id;
    const updatedActivities = req.body.activities; // Extract activities from the request body
    try {
        const result = await updateActivities(tripId, updatedActivities);
        if (result.nModified === 0) {
            return res.status(404).json({ "message": "Trip not found or no changes made" });
        }
        return res.status(200).json({ "message": "Activities updated successfully" });
    } catch (error) {
        return res.status(500).json({ "message": "Internal Server Error" });
    }
};

export { establishJourney, viewAllTrips,deleteTripHandler,updateTripHandler,updateActivitiesHandler };


