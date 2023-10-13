/*
    Assignment #4
    Jasleen Kaur Braich
*/

$(function () {
    // Check if geolocation is allowed
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // Get the current location
            const currentLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
            };

            // Display the current location in div#locationhere
            const locationHere = document.getElementById("locationhere");
            locationHere.textContent = `Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}, Accuracy: ${currentLocation.accuracy} meters`;

            // Check local storage for an existing location
            const storedLocation = localStorage.getItem("userLocation");

            if (storedLocation) {
                // Display the stored location and welcome message for returning users
                const welcomeMessage = document.createElement("h1");
                welcomeMessage.textContent = "Welcome back!";
                const storedLocationDisplay = document.createElement("p");
                storedLocationDisplay.textContent = `Your last location: ${storedLocation}`;
                
                // Calculate and display the distance
                const storedLocationCoords = storedLocation.split(",");
                const distance = calcDistanceBetweenPoints(
                    parseFloat(storedLocationCoords[0]),
                    parseFloat(storedLocationCoords[1]),
                    currentLocation.latitude,
                    currentLocation.longitude
                );
                const distanceInKm = (distance / 1000).toFixed(2); // Bonus: convert to kilometers with 2 decimal places
                const distanceDisplay = document.createElement("p");
                distanceDisplay.textContent = `You traveled ${distanceInKm} km since your last visit.`;

                // Append elements to the page
                document.body.appendChild(welcomeMessage);
                document.body.appendChild(storedLocationDisplay);
                document.body.appendChild(distanceDisplay);
            } else {
                // Display a welcome message for first-time visitors
                const welcomeMessage = document.createElement("h1");
                welcomeMessage.textContent = "Welcome to the page for the first time!";
                document.body.appendChild(welcomeMessage);
            }

            // Store the current location in local storage
            const currentLocationString = `${currentLocation.latitude},${currentLocation.longitude}`;
            localStorage.setItem("userLocation", currentLocationString);
        });
    } else {
        // Geolocation is not supported
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Geolocation is not supported by your browser.";
        document.body.appendChild(errorMessage);
    }

    // Function to calculate the distance between two lat/long pairs on Earth
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
      
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
}
});






