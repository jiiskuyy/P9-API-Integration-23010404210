const NodeCache = require('node-cache');
// TTL default 60 detik, bisa disesuaikan per endpoint
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });
module.exports = cache;