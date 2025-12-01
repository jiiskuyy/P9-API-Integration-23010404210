// src/controllers/weather.controller.js
const { fetchWeatherByCity } = require('../services/weather.service');

async function getByCity(req, res, next) {
    try {
        const city = req.query.city || 'Palangkaraya';
        const apiKey = process.env.OWM_API_KEY;
        
        const data = await fetchWeatherByCity(city, apiKey);
        res.json(data);
    } catch (err) {
        next(err);
    }
}

module.exports = { getByCity };