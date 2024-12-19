# Animal API

This is a simple REST API server that provides information about different animals, including dogs, cats, and bunnies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/unnamed-lab/petit-animal-api.git
   cd petit-animal-api
   ```

2. Install dependencies using pnpm:

   ```
   pnpm install
   ```

3. Start the server:
   ```
   pnpm start
   ```

The server will start running at `http://localhost:3001`.

## Usage

Once the server is running, you can make HTTP requests to the available endpoints using tools like curl, Postman, or any HTTP client in your application.

## API Endpoints

The following endpoints are available:

- `GET /api/dogs`: Get a list of dogs
- `GET /api/cats`: Get a list of cats
- `GET /api/bunnies`: Get a list of bunnies

Each endpoint supports pagination with the following query parameters:

- `page`: The page number (default: 1)
- `limit`: The number of items per page (default: 10)

Example request:

```
GET http://localhost:3001/api/dogs?page=1&limit=5
```

Response format:

```json
{
  "data": [
    {
      "id": "1",
      "breed": "Labrador Retriever",
      "type": "dog",
      "image": "https://example.com/labrador.jpg"
    }
    // ... more items
  ],
  "nextPage": 2
}
```

## Technologies Used

- Node.js
- Express.js
- TypeScript
- pnpm (Package manager)

For more information on how to contribute to this project, please see the [CONTRIBUTING.md](CONTRIBUTING.md) file.
