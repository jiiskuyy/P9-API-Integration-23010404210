// src/services/weather.service.js
const httpClient = require('../utils/httpClient');
const cache = require('../utils/cache');

const WEATHER_TTL = 300; // 5 menit

async function fetchWeatherByCity(city, apiKey) {
    if (!apiKey) {
        const err = new Error('OWM_API_KEY is not set');
        err.status = 400;
        throw err;
    }

    const key = `weather_${city.toLowerCase()}`;
    if (cache.has(key)) return cache.get(key);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    
    const { data } = await httpClient.get(url);
    
    cache.set(key, data, WEATHER_TTL);
    return data;
}

module.exports = { fetchWeatherByCity };