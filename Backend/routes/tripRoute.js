import express from 'express'
import { establishJourney,viewAllTrips,deleteTripHandler,updateTripHandler,updateActivitiesHandler } from '../controller/tripController.js'
import { tripInformation } from '../middleware/tripMiddleware.js'

const router=express.Router()

router.post('/trip',tripInformation,establishJourney,)
router.get('/viewtrips',viewAllTrips)
router.delete('/:id', deleteTripHandler)
router.put('/updatetrip/:id', updateTripHandler);
router.put('/:id',updateActivitiesHandler)

export default router