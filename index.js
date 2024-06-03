const latitude = 51.294112;
const longitude = -0.753201;

    fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to get points.');
        }

        return response.json();
      })
      .then(points => points.properties.forecast)
      .then(url => fetch(url))
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to get forecast.')
        }

        return response.json();
      })
      .then(forecast => forecast.properties.periods[0].temperature)
      .then(temperature => {
        document.getElementById('temperature').innerText = temperature + '°';
      })
      .catch(error => alert('There was an error retrieving your weather.'));