const express = require('express');
const sellerRoutes = require('./routes/sellerRoutes');
const buyerRoutes = require('./routes/buyerRoutes');
const gameRoutes = require('./routes/gameRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');

const app = express();
app.use(express.json());

app.use('/seller', sellerRoutes);
app.use('/buyer', buyerRoutes);
app.use('/games', gameRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => res.send('DLS Games API'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
