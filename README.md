# copilot-demo

This project is a simple NestJS application built with TypeScript. It serves as a demonstration of how to set up a NestJS project with a basic structure, including controllers, services, and DTOs.

## Project Structure

- `src/main.ts`: The entry point of the application. It bootstraps the NestJS application and starts the server.
- `src/app.module.ts`: The root module of the application. It imports controllers and services and sets up the application's dependencies.
- `src/controllers/app.controller.ts`: Defines the `AppController` class, which contains methods for handling HTTP requests.
- `src/services/app.service.ts`: Defines the `AppService` class, which implements business logic and is called by the controller.
- `src/dto/app.dto.ts`: Defines Data Transfer Objects (DTOs) used to specify the structure of request and response data.

## Setup Instructions

1. Clone the repository:

   ```
   git clone <repository-url>
   cd copilot-demo
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the application:

   ```
   npm run start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Technologies Used

- TypeScript
- NestJS
- Node.js

## License

This project is licensed under the MIT License.
