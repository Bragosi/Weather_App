## Weather Application
This is a modern web application built with React that provides real-time weather updates and a 5-day forecast for cities worldwide. Powered by the OpenWeatherMap API and GeoDB Cities API, it allows users to search for weather data by city name and displays detailed weather information with a clean, responsive interface. The app defaults to showing weather for Akure, Nigeria, on load, making it user-friendly from the start.

----
## Features

1. **Real-Time Weather Data:** Displays current temperature, weather description, feels-like temperature, wind speed, humidity, and pressure.
2. 5-Day Forecast: Shows daily weather forecasts with temperature and weather icons for the selected city.
3. City Search: Autocomplete search powered by GeoDB Cities API to find cities quickly and accurately.
4. Default City: Automatically loads weather data for Akure, NG, on app startup.
5. Responsive Design: Built with Tailwind CSS for a seamless experience across devices.
6. Dynamic Weather Icons: Fetches weather icons from OpenWeatherMap to visually represent conditions.
------

## Technologies Used
React: Frontend JavaScript library for building the user interface.
OpenWeatherMap API: Provides current weather and forecast data.
GeoDB Cities API: Enables city search with autocomplete functionality.
Tailwind CSS: Used for styling the application.
AsyncPaginate: Powers the autocomplete search bar for city selection.

Getting Started
Prerequisites

Node.js (v14 or higher)
npm or yarn
OpenWeatherMap API key (sign up at OpenWeatherMap to get one)
GeoDB Cities API key (sign up at RapidAPI to get one)

Installation

Clone the Repository:
git clone https://github.com/your-username/weatherwise.git
cd weatherwise


Install Dependencies:
npm install

or
yarn install


Set Up Environment Variables:Create a .env file in the root directory and add your API keys:
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_GEO_API_KEY=your_geodb_api_key


Start the Development Server:
npm start

or
yarn start

The app will run at http://localhost:3000.


Usage

View Default City Weather:
On load, the app displays the current weather and 5-day forecast for Akure, Nigeria.


Search for a City:
Use the search bar to type a city name (e.g., "Lagos").
Select a city from the autocomplete suggestions to view its weather data.


Explore Weather Details:
The Current Weather section shows temperature, weather description, feels-like temperature, wind speed, humidity, and pressure.
The Forecast section displays a 5-day forecast with daily temperature and weather icons.



Project Structure
weatherwise/
├── src/
│   ├── component/
│   │   ├── CurrentWeatherSection.jsx  # Displays current weather details
│   │   ├── SearchSection.jsx          # City search with autocomplete
│   │   ├── ForecastSection.jsx        # 5-day weather forecast
│   ├── constants/
│   │   ├── API.js                    # API URLs and options
│   ├── images/                       # Weather icons and logo
│   ├── App.jsx                       # Main app component
│   ├── index.js                      # Entry point
├── public/                           # Static assets
├── .env                              # Environment variables (not tracked)
├── package.json                      # Dependencies and scripts
├── README.md                         # Project documentation

Screenshots
To be added: Include screenshots of the app showing the search bar, current weather, and forecast sections.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Known Issues

Weather Icons: If icons fail to load, ensure the OpenWeatherMap API returns valid icon codes. A fallback to local images can be implemented if needed.
API Limits: Free API tiers have request limits. Consider upgrading for heavy usage.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

OpenWeatherMap for weather data.
GeoDB Cities for city search functionality.
Tailwind CSS for styling.


Built with ☀️ and 🌧️ by [Your Name].
