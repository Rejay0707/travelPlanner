# travelPlanner

To ensure the backend server runs smoothly, execute the command `npm start`. Here's an overview of the backend components and their functionalities:

1. **Trip Model**: Defines the schema and structure for trips.

2. **Trip Controller**: Manages incoming requests related to trips, such as adding, updating, and deleting trips and activities.

3. **Trip Service**: Contains the business logic for handling trip-related operations, including CRUD operations for trips and activities.

4. **Trip Routes**: Defines the routes for accessing trip-related endpoints.

5. **Server Initialization**: Initializes and configures the backend server.

Functionalities Implemented:

- **Adding Trips and Activities**: Allows users to add new trips along with associated activities.

- **Updating Trips and Activities**: Enables users to modify existing trips and their associated activities.

- **Deleting Trips**: Provides functionality to delete trips from the system.

To interact with these functionalities:

- Make sure the backend server is running using the command `npm start`.
- Utilize HTTP requests to access the specified endpoints defined in the trip routes.

Additionally, testing has been conducted for controllers and services using Jest. To run these tests, execute `npm test`.

The code includes mock implementations for various service methods and controllers. Key test cases covered include:

- Establishing a journey by adding a new trip and ensuring it does not already exist.
- Handling scenarios where a trip already exists to prevent duplicates.
- Retrieving all trips.
- Deleting a trip.
- Updating trip details and activities.

These tests ensure the reliability and correctness of the backend functionalities.
