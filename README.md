# Travel Explorer 🗺️

This is a simple front-end web application that allows users to search for a travel destination and view current weather information and a gallery of photos for that location.

## Live Demo Screenshot

*(This is a screenshot of the project running on my local machine. A live demo is not available via GitHub Pages to protect the API keys, as is standard practice for client-side-only applications.)*



## Technologies Used
- HTML5
- CSS3 (with Flexbox/Grid)
- JavaScript (ES6+)
- **APIs:**
  - OpenWeatherMap API for weather data
  - Unsplash API for photos

## Features
- Search for any city worldwide.
- Displays current temperature and weather conditions.
- Shows a gallery of high-quality photos related to the searched city.
- Responsive and clean design.
- Securely handles API keys by keeping them out of the version control using a `.gitignore` file.

## How to Run This Project Locally

To run this project on your own computer:

1.  **Clone the repository:**
    
    git clone [https://github.com/Kumari-Divya-Rashmi/travel-explorer.git](https://github.com/your-username/travel-explorer.git)
    
2.  **Navigate to the project directory:**
   
    cd travel-explorer
   
3.  **Create your API key file:**
    Create a new file in the root of the project named `config.js`.

4.  **Add your API keys:**
    Inside `config.js`, add your personal API keys from OpenWeatherMap and Unsplash in the following format:
    javascript
    const API_KEYS = {
        WEATHER: 'YOUR_OWN_OPENWEATHERMAP_API_KEY',
        UNSPLASH: 'YOUR_OWN_UNSPLASH_API_KEY'
    };
    
5.  **Open `index.html`** in your browser (or use the VS Code Live Server extension).