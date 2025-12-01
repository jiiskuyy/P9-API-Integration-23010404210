module.exports = (err, req, res, next) => {
    const status = err.status || err.response?.status || 500;
    const detail = err.detail || err.response?.data || err.message || 'Unknown error';
    res.status(status).json({ message: 'Error', detail });
};