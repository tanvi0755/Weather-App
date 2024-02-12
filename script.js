const fetchData = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9c816b13e3msh7e8887ed00a54edp1c2ec5jsn49e28194d019',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the response as JSON

    console.log('Response data:', data);

    // Access the specific properties from the response data
    const {
      temp,
      min_temp,
      max_temp,
      cloud_pct,
      humidity,
      sunrise,
      sunset,
    } = data;

    console.log('Temperature:', temp);
    console.log('Min Temperature:', min_temp);
    console.log('Max Temperature:', max_temp);
    console.log('cloud_pct:', cloud_pct);
    console.log('humidity:', humidity);
    console.log('sunrise:', sunrise);
    console.log('sunset:', sunset);

    // Update the HTML elements with the fetched data
    document.getElementById('cityName').textContent = city; // Update city name
    document.getElementById('temp').textContent = temp;
    document.getElementById('min_temp').textContent = min_temp;
    document.getElementById('max_temp').textContent = max_temp;
    document.getElementById('cloud_pct').textContent = cloud_pct;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('sunrise').textContent = sunrise;
    document.getElementById('sunset').textContent = sunset;

    // Update other elements as needed
  } catch (error) {
    console.error(error);
  }
};

// Function to search weather by city
const searchWeatherByCity = () => {
  const city = document.getElementById('cityInput').value;
  fetchData(city);
};

// Call the asynchronous function with default city
fetchData('Pune');
