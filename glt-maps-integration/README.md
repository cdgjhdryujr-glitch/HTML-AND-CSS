# GLT Maps Integration

## Overview
This project integrates various Google Maps APIs to enhance the functionality of the Global Ten-ex Logistics website. The primary features include displaying a map with markers, providing location predictions as users type, and calculating driving distances and times.

## Features
- **Google Maps JavaScript API**: Displays a map and allows for the addition of markers to indicate locations.
- **Places Autocomplete API**: Predicts locations as the user types in input fields, improving user experience and accuracy.
- **Distance Matrix API**: Calculates driving distances and times between specified locations, aiding in logistics planning.

## Project Structure
```
glt-maps-integration
├── src
│   ├── ind.html          # Main HTML document
│   ├── UI.js             # User interface logic
│   ├── css
│   │   └── style.css     # Styles for the application
│   ├── maps
│   │   ├── maps.js       # Google Maps integration logic
│   │   ├── autocomplete.js # Places Autocomplete integration
│   │   └── distance-matrix.js # Distance Matrix API implementation
│   └── utils
│       └── api.js        # Utility functions for API calls
├── .env.example           # Template for environment variables
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd glt-maps-integration
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure environment variables**:
   - Rename `.env.example` to `.env` and add your Google Maps API keys.

4. **Run the application**:
   - Open `src/ind.html` in a web browser to view the application.

## Usage
- Use the "Track Item" button to open the tracking dialog.
- Enter a pickup and dropoff location to get an estimate using the Instant Quote section.
- The map will display markers based on user input and provide driving distances and times when requested.

## API Documentation
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
- [Places Autocomplete API](https://developers.google.com/maps/documentation/javascript/places-autocomplete)
- [Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start)

## License
This project is licensed under the MIT License.