const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config({ path: '.env' });

// start database
const connectDatabase = require('./database/database.js')
// connectDatabase()

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = require('./routes/userRoute');

app.use('/api/user', user)

app.get('/', (req, res) => {
    res.send('im fine')
})

const server = app.listen(3000, () => {
    console.log(`server is running on http://localhost:3000`);
})