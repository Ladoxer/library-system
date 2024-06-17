# Library System API

## Description

Library System API is a robust backend system built with NestJS and MongoDB for managing a library's books and authors. It provides CRUD operations for books and authors, along with additional features like searching for books by author and publishing date range. The API is documented using Swagger and includes comprehensive unit tests.

## Table of Contents

- [Library System API](#library-system-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [API Documentation](#api-documentation)
  - [Project Structure](#project-structure)
  - [Testing](#testing)
  - [Technologies Used](#technologies-used)
  - [Author](#author)
  - [License](#license)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete books and authors.
- **Advanced Queries**: Retrieve books by author and within specified date ranges.
- **Swagger Documentation**: Interactive API documentation available at `/api` endpoint.
- **Jest Tests**: Unit tests ensure reliability and maintainability of code.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.22.x)
- MongoDB (local or remote instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ladoxer/library-system.git
   cd library-system
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the project and add the following variables:

   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/library
   ```

### Running the Application

1. **Start MongoDB**

   Ensure your MongoDB instance is running. If using a local instance, start it with:

   ```bash
   mongod
   ```

2. **Run the application**

   Using npm:

   ```bash
   npm run start:dev
   ```

   Or using yarn:

   ```bash
   yarn start:dev
   ```

   The application should now be running on http://localhost:3000.

## API Documentation

The API documentation is available at http://localhost:3000/api when the application is running. It provides detailed information on all available endpoints, request parameters, and responses.

## Project Structure

The project follows a structured approach with modules for books and authors, each containing controllers, services, DTOs, entities, and schemas.

```plaintext
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── authors/
│   ├── authors.controller.ts
│   ├── authors.module.ts
│   ├── authors.service.ts
│   ├── dto/
│   │   ├── author.dto.ts
│   ├── entities/
│   │   ├── author.entity.ts
│   ├── schemas/
│   │   ├── author.schema.ts
├── books/
│   ├── books.controller.ts
│   ├── books.module.ts
│   ├── books.service.ts
│   ├── dto/
│   │   ├── book.dto.ts
│   ├── entities/
│   │   ├── book.entity.ts
│   ├── schemas/
│   │   ├── book.schema.ts
├── main.ts
```

## Testing

Unit tests are written using Jest. To run the tests, use the following commands:

- Run all tests:

  ```bash
  npm run test
  ```

  or

  ```bash
  yarn test
  ```

- Run tests in watch mode:

  ```bash
  npm run test:watch
  ```

  or

  ```bash
  yarn test:watch
  ```

## Technologies Used

- **Framework**: NestJS
- **Database**: MongoDB
- **ODM**: Mongoose
- **Documentation**: Swagger
- **Testing**: Jest

## Author

Muhammed Labeeb U
- Email: muhammedlabeebu@example.com


### Additional Tips

- **Update `.env.example`**: Provide an example environment file (`env.example`) with placeholders for users to set up their environment variables.

