async function getWeather() {

    const city = document.getElementById('city').value;
    
    const apiKey = "YOUR_API_KEY"; *// Replace with your OpenWeather API key*
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(url);
    
    const data = await response.json();
    
    if (data.main) {
    
    const temperature = data.main.temp;
    
    const description = data.weather[0].description;
    
    document.getElementById('result').textContent = `Temperature: ${temperature}°C, Description: ${description}`;
    
    } else {
    
    document.getElementById('result').textContent = "City not found.";
    
    }
    
    }