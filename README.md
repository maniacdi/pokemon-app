# Pokémon API

This is a simple Node.js application that interacts with the [Pokémon API](https://pokeapi.co/api/v2/) to provide information about Pokémon. The project includes two main endpoints:

1. **Find Pokémon by Name**
2. **Get Pokémon by Color and Export to CSV**

## Project Structure

- **`src/app.js`**: Main file that sets up the Express application and defines routes.
- **`src/controllers/pokemon.controller.js`**: Controllers that handle requests and responses.
- **`src/services/pokemon.service.js`**: Services that interact with the external API to fetch Pokémon information.
- **`src/utils/csv.util.js`**: Utilities for converting data to CSV format.
- **`Dockerfile`**: Configuration file to create a Docker image of the project.

## Setting Up the Environment

1. **Install Dependencies**

   Make sure you have Node.js and npm installed. Then, install the project dependencies:

   ```bash
   npm install

   ```

2. **Run the Application Locally**

   Start the application locally with:

   ```bash
   npm start

   The server will be available at http://localhost:3000.
   ```

## Endpoints

1. **Find Pokémon by Name**

- **`Method`**: POST
- **`URL`**: /pokemon/findByName
- **`Request Body`**:
  {
  "name": "pikachu"
  }
- **`Response`**:
  {
  "count": 1,
  "results": [
  {
  "name": "pikachu",
  "base_experience": 112,
  "height": 4,
  "weight": 60
  }
  ]
  }

2. **Get Pokémon by Color and Export to CSV**

- **`Method`**: GET
- **`URL`**: /pokemon/csv/:color
- **`URL Parameter`**: color
- **`Response`**: Downloads a CSV file containing Pokémon data, ordered by base_experience.

## Docker Setup

1. **Build the Docker Image**

   ```bash
    docker build -t pokemon-app .

   ```

2. **Run the Docker Container**

   ```bash
   docker run -p 3000:3000 pokemon-app
   ```

## Docker Setup

## Testing the Endpoints

1. **Find Pokémon by Name**

   ```bash
    curl -X POST http://localhost:3000/pokemon/findByName -H "Content-Type: application/json" -d '{"name": "pikachu"}'

   ```

2. **Get Pokémon by Color and Export to CSV**

   ```bash
   curl -X GET http://localhost:3000/pokemon/csv/yellow --output yellow_pokemons.csv
   ```

## License

This project is licensed under the MIT License.
Feel free to copy and paste this `README.md` into your project. It provides a clear explanation of the project, how to set up the environment, and how to use the API endpoints.
