const axios = require('axios');
const httpClient = axios.create({
    timeout: 15000 // 15 detik
});
module.exports = httpClient;