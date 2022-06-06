const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const { double } = require('webidl-conversions');


mongoose.connect('mongodb://localhost/InsightOut')
.then(()=> console.log('connected'))
.catch(error => console.log('not connected',err))

const ambulanceSchema = new mongoose.Schema({
    AmbulanceId: Number,
    StartLat: Number,
    StartLon: Number,
    EndLat: Number,
    EndLon: Number,
    CurrentLat: Number,
    CurrentLon: Number


});

const Ambulance = mongoose.model('Ambulance', ambulanceSchema);

async function createAmbulance(){
    const ambulance = new Ambulance({ 
        AmbulanceId: 401,
        StartLat: 7.032564,
        StartLon: 14.87452,
        EndLat: 7.032562,
        EndLon: 14.87457,
        CurrentLat: 7.032561,
        CurrentLon: 14.87450      
       
    });

    const result = await ambulance.save();
    console.log(result);
}

createAmbulance();

module.exports = Ambulance;