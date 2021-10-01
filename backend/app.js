const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // which domain can access our resources
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    next();
});

app.post('/patient_record',(req, res, next) => {
    const patient = req.body;
    console.log("patient: "+ patient)
    res.status(201).json({
        message: "Patient created!",
        ApprOrNAppr: True
    });
});


app.use('/patient_record',(req, res, next) => {
    const patient = [
        {
            name: "Backy",
            age: 24,
            date:"today",
            gender:"Female",
            symptom:"Headache",
        }
    ]
    res.status(200).json({
        status: "Success",
        message: "Patient created!",
        data: patient
    });
});

module.exports = app;