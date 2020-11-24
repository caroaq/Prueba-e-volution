const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings 
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));


//Routes
app.use('/api/employees', require('./routes/employee'));
app.use('/api/contractors', require('./routes/contractor'));
app.use('/api/employees_contractors', require('./routes/employee_contractor'));

//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})