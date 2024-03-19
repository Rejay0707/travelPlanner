import { createTrip,checkTrip, getAllTrips, deleteTrip, updateTrip, updateActivities  } from '../service/tripService'; 
import Trip from '../models/tripModel'; 

jest.mock('../models/tripModel'); // Mocking the mongoose model

describe('Trip Service', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock function calls after each test
    });

    it('should create a new trip', async () => {
        const mockTripData = {
            destination: 'Test Destination',
            startDate: new Date('2024-03-20'),
            endDate: new Date('2024-03-25'),
            activities: []
        };
        const expectedTrip = {
            _id: 'mockTripId',
            ...mockTripData
        };

        Trip.create.mockResolvedValue(expectedTrip);

        const trip = await createTrip(mockTripData.destination, mockTripData.startDate, mockTripData.endDate, mockTripData.activities);
        expect(trip).toEqual(expectedTrip);
        expect(Trip.create).toHaveBeenCalledWith(mockTripData);
    });

    

    //  test for checkTrip function
    it('should check if a trip already exists', async () => {
        const mockTripData = {
            destination: 'Test Destination',
            startDate: new Date('2024-03-20'),
            endDate: new Date('2024-03-25')
        };
        const existingTrip = {
            _id: 'existingTripId',
            ...mockTripData
        };

        Trip.findOne.mockResolvedValue(existingTrip);

        const trip = await checkTrip(mockTripData.destination, mockTripData.startDate, mockTripData.endDate);
        expect(trip).toEqual(existingTrip);
        expect(Trip.findOne).toHaveBeenCalledWith(mockTripData);
    });

    describe('Trip Service', () => {
        afterEach(() => {
            jest.clearAllMocks(); // Clear mock function calls after each test
        });
    
        // Test for getAllTrips function
        it('should get all trips', async () => {
            const mockTrips = [
                { _id: 'trip1', destination: 'Destination 1', startDate: new Date('2024-03-20'), endDate: new Date('2024-03-25'), activities: [] },
                { _id: 'trip2', destination: 'Destination 2', startDate: new Date('2024-03-21'), endDate: new Date('2024-03-26'), activities: [] }
            ];
    
            Trip.find.mockResolvedValue(mockTrips);
    
            const trips = await getAllTrips();
            expect(trips).toEqual(mockTrips);
            expect(Trip.find).toHaveBeenCalledWith({});
        });
    
        // Test for deleteTrip function
        it('should delete a trip', async () => {
            const tripId = 'tripIdToDelete';
            const mockDeleteResult = { deletedCount: 1 };
    
            Trip.deleteOne.mockResolvedValue(mockDeleteResult);
    
            const result = await deleteTrip(tripId);
            expect(result).toEqual(mockDeleteResult);
            expect(Trip.deleteOne).toHaveBeenCalledWith({ _id: tripId });
        });
    
        // Test for updateTrip function
        it('should update a trip', async () => {
            const tripId = 'tripIdToUpdate';
            const updatedTripDetails = { destination: 'Updated Destination', startDate: new Date('2024-03-22'), endDate: new Date('2024-03-27') };
            const mockUpdateResult = { nModified: 1 };
    
            Trip.updateOne.mockResolvedValue(mockUpdateResult);
    
            const result = await updateTrip(tripId, updatedTripDetails);
            expect(result).toEqual(mockUpdateResult);
            expect(Trip.updateOne).toHaveBeenCalledWith({ _id: tripId }, updatedTripDetails);
        });
    
        // Test for updateActivities function
        it('should update trip activities', async () => {
            const tripId = 'tripIdToUpdateActivities';
            const updatedActivities = [
                { title: 'Activity 1', description: 'Description 1' },
                { title: 'Activity 2', description: 'Description 2' }
            ];
            const mockUpdateResult = { nModified: 1 };
    
            Trip.updateOne.mockResolvedValue(mockUpdateResult);
    
            const result = await updateActivities(tripId, updatedActivities);
            expect(result).toEqual(mockUpdateResult);
            expect(Trip.updateOne).toHaveBeenCalledWith({ _id: tripId }, { activities: updatedActivities });
        });
    });
    
});
