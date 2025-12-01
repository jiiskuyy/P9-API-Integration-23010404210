require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const countriesRoutes = require('./src/routes/countries.routes');
const weatherRoutes = require('./src/routes/weather.routes');
const notFound = require('./src/middleware/notfound.middleware');
const errorHandler = require('./src/middleware/error.middleware');
const swaggerUi = require('swagger-ui-express');
const openApiSpec = require('./src/docs/openapi');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/countries', countriesRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});