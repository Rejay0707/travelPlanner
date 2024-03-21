# travelPlanner

To run the backend server, you can use the command `npm start`. The backend includes the following components:

1. **Trip Model**: This defines the structure and schema for trips.

2. **Trip Controller**: The controller handles incoming requests related to trips, such as adding, updating, and deleting trips and activities.

3. **Trip Service**: Here, you'll find the business logic for handling trip-related operations, including CRUD (Create, Read, Update, Delete) operations for trips and activities.

4. **Trip Routes**: These define the routes for accessing trip-related endpoints.

5. **Server**: This initializes and configures the backend server.

Functionalities implemented in the backend:

- **Add Trip and Activities**: Users can add new trips along with associated activities.

- **Update Trip and Activities**: Existing trips and their associated activities can be modified.

- **Delete Trips**: Functionality is provided to delete trips from the system.

To utilize these functionalities, make sure the backend server is running by executing the `npm start` command in the terminal. Once the server is operational, you can interact with it through HTTP requests to the specified endpoints defined in the trip routes.
