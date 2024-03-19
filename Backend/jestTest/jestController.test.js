import { establishJourney,viewAllTrips,deleteTripHandler,updateTripHandler,updateActivitiesHandler } from '../controller/tripController';
import { createTrip, checkTrip, getAllTrips, deleteTrip, updateTrip, updateActivities } from '../service/tripService';

jest.mock('../service/tripService');

describe('Trip Controller', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock function calls after each test
    });

    it('should establish a journey', async () => {
        const mockReq = {
            body: {
                destination: 'Test Destination',
                startDate: new Date('2024-03-20'),
                endDate: new Date('2024-03-25'),
                activities: []
            }
        };
        const mockRes = {
            status: jest.fn(() => mockRes),
            json: jest.fn()
        };
    
        const existingTrip = null; // For the case where the trip does not exist
        createTrip.mockResolvedValueOnce(mockReq.body);
        checkTrip.mockResolvedValueOnce(existingTrip);
    
        await establishJourney(mockReq, mockRes);
    
        expect(checkTrip).toHaveBeenCalledWith(mockReq.body.destination, mockReq.body.startDate, mockReq.body.endDate);
        expect(createTrip).toHaveBeenCalledWith(mockReq.body.destination, mockReq.body.startDate, mockReq.body.endDate, mockReq.body.activities);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            destination: mockReq.body.destination,
            startDate: mockReq.body.startDate,
            endDate: mockReq.body.endDate,
            activities: mockReq.body.activities
        });
    });
    
    it('should return an error if trip already exists', async () => {
        const mockReq = {
            body: {
                destination: 'Test Destination',
                startDate: new Date('2024-03-20'),
                endDate: new Date('2024-03-25'),
                activities: []
            }
        };
        const mockRes = {
            status: jest.fn(() => mockRes),
            json: jest.fn()
        };
    
        const existingTrip = { destination: 'Test Destination', startDate: new Date('2024-03-20'), endDate: new Date('2024-03-25') }; // For the case where the trip already exists
        checkTrip.mockResolvedValueOnce(existingTrip);
    
        await establishJourney(mockReq, mockRes);
    
        expect(checkTrip).toHaveBeenCalledWith(mockReq.body.destination, mockReq.body.startDate, mockReq.body.endDate);
        expect(createTrip).not.toHaveBeenCalled();
        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ "message": "Trip already exists" });
    });
    
    

    //  Test for viewAllTrips function
    it('should get all trips', async () => {
        const mockTrips = [
            { _id: 'trip1', destination: 'Destination 1', startDate: new Date('2024-03-20'), endDate: new Date('2024-03-25'), activities: [] },
            { _id: 'trip2', destination: 'Destination 2', startDate: new Date('2024-03-21'), endDate: new Date('2024-03-26'), activities: [] }
        ];

        getAllTrips.mockResolvedValueOnce(mockTrips);

        const mockReq = {};
        const mockRes = {
            status: jest.fn(() => mockRes),
            json: jest.fn()
        };

        await viewAllTrips(mockReq, mockRes);

        expect(getAllTrips).toHaveBeenCalled();
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockTrips);
    });

    
    describe('Trip Controller', () => {
        afterEach(() => {
            jest.clearAllMocks(); // Clear mock function calls after each test
        });
    
        // Test for deleteTripHandler function
        it('should delete a trip', async () => {
            const mockReq = {
                params: { id: 'tripIdToDelete' }
            };
            const mockRes = {
                status: jest.fn(() => mockRes),
                json: jest.fn()
            };
    
            deleteTrip.mockResolvedValueOnce({ deletedCount: 1 });
    
            await deleteTripHandler(mockReq, mockRes);
    
            expect(deleteTrip).toHaveBeenCalledWith(mockReq.params.id);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({ message: "Trip deleted successfully" });
        });
    
        // Test for updateTripHandler function
        it('should update a trip', async () => {
            const mockReq = {
                params: { id: 'tripIdToUpdate' },
                body: { destination: 'Updated Destination', startDate: new Date('2024-03-22'), endDate: new Date('2024-03-27') }
            };
            const mockRes = {
                status: jest.fn(() => mockRes),
                json: jest.fn()
            };
    
            updateTrip.mockResolvedValueOnce({ nModified: 1 });
    
            await updateTripHandler(mockReq, mockRes);
    
            expect(updateTrip).toHaveBeenCalledWith(mockReq.params.id, mockReq.body);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({ message: "Trip updated successfully" });
        });
    
        // Test for updateActivitiesHandler function
        it('should update trip activities', async () => {
            const mockReq = {
                params: { id: 'tripIdToUpdateActivities' },
                body: { activities: [
                    { title: 'Activity 1', description: 'Description 1' },
                    { title: 'Activity 2', description: 'Description 2' }
                ]}
            };
            const mockRes = {
                status: jest.fn(() => mockRes),
                json: jest.fn()
            };
    
            updateActivities.mockResolvedValueOnce({ nModified: 1 });
    
            await updateActivitiesHandler(mockReq, mockRes);
    
            expect(updateActivities).toHaveBeenCalledWith(mockReq.params.id, mockReq.body.activities);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({ message: "Activities updated successfully" });
        });
    
        
    });
    
});
