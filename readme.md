# Weather forecast

### Instructions

In Reservamos we're always looking for ways to help our users have the best
experience when looking for travel options so that they can make the best decision
when reserving a bus or flight ticket. To accomplish this, we have to make an app where
the users can check the weather forecast for the destinations available in Reservamos.
The web app's functionality is to be able to compare the weather forecast for the next 5
days, by day, of different destinations offered by Reservamos. The user must be able to
input the name of cities and see the maximum and minimum temperature for these
places.
For this challenge you will be using OpenWeather's API to look up the temperature
using geographic coordinates, and show the results in metric units.

## Installation

### Follow these steps to correctly run the app. Execute these commands in your favorite terminal.

### 1-. Clone the [Repository](https://github.com/LuisGerar321/weather-forecast-back) in your preferred folder e.g. "/home/luis"

```
git clone https://github.com/LuisGerar321/weather-forecast-back.git
```

### 2-. Install the modules required to run the project on both client-side and server-side:

```
cd weather-forecast-back
npm i
```

### 3-. Configure Server-Side (Backend)

### In the server folder 'weather-forecast-back', create a new file named '.env' and paste the following environment variables to properly run the backend:

```
#API Version
API_VERSION = "v1"

#Server Config
SERVER_PORT = 3001
SERVER_HOST = "localhost"

WEATHERAPIKEY = "your api key"
```

#### Customize the variables as needed by inserting your API key.

## Testing the app

### Open your Postman App (an API testing tool that allows for easy validation of API responses) and make a new POST HTTP request to your backend "http://localhost:3001/v1/weatherforecast" with the following payload:

```
  {
    "city_name": "San Francisco",
    "state": "California",
    "country": "Estados Unidos"
  }

```

## Unit test

### Run npm test
