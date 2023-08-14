const express = require('express');
const cors = require('cors');
const studentRouter = require('./routers/studentRouter');
const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/students', studentRouter);

app.listen(port, () => {
    console.log(`Listening on port `, port);
})

/*
    sequelize - instantiate
        Make tables/models/associations
    Routers - 

*/