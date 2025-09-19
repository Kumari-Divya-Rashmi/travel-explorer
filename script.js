const WEATHER_API_KEY = '731eccae45213cb17c205bd1a36cba71';
const UNSPLASH_API_KEY = 'yJmfMKL_Xz9jochUKcy3WTJx98beGXg00f1t7lcdb00';

// Get references to HTML elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');
const destinationName = document.getElementById('destination-name');
const weatherInfo = document.getElementById('weather-info');
const photoGallery = document.getElementById('photo-gallery');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchData(city);
    } else {
        alert('Please enter a destination.');
    }
});

async function fetchData(city) {
    // Show a loading message and prepare the container for fade-in
    destinationName.textContent = `Loading data for ${city}...`;
    resultsContainer.classList.remove('hidden');
    resultsContainer.style.opacity = '0';
    weatherInfo.innerHTML = '';
    photoGallery.innerHTML = '';
    
    try {
        // Fetch weather and photos in parallel
        const [weatherData, photosData] = await Promise.all([
            fetchWeather(city),
            fetchPhotos(city)
        ]);
        
        // Display the data
        displayWeather(weatherData);
        displayPhotos(photosData);
        destinationName.textContent = city;

        // Trigger the fade-in effect
        setTimeout(() => {
            resultsContainer.style.opacity = '1';
            resultsContainer.style.maxHeight = '1000px'; 
        }, 10);

    } catch (error) {
        console.error('Error fetching data:', error);
        destinationName.textContent = `Could not fetch data for ${city}. Please try again.`;
        resultsContainer.style.opacity = '1';
        resultsContainer.style.maxHeight = '1000px';
    }
}

// Function to fetch weather data
async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Weather data not found.');
    }
    return response.json();
}

// Function to fetch photos from Unsplash
async function fetchPhotos(city) {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${city}&per_page=6&client_id=${UNSPLASH_API_KEY}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Photo data not found.');
    }
    return response.json();
}

// Function to display weather information
function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherInfo.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${description}</p>
    `;
}

// Function to display photos in the gallery
function displayPhotos(data) {
    if (data.results.length === 0) {
        photoGallery.innerHTML = '<p>No photos found for this destination.</p>';
        return;
    }

    data.results.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        photoGallery.appendChild(img);
    });
}