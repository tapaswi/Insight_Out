const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const { double } = require('webidl-conversions');


mongoose.connect('mongodb://localhost/InsightOut')
.then(()=> console.log('connected'))
.catch(error => console.log('not connected',err))

const caseSchema = new mongoose.Schema({
    CaseId: Number,    
    CaseTitle: String,
    CaseDesc: String,
    AddressDesc: String,
    Lat: Number,
    Lon: Number,
    Image1: String,
    Image2: String,
    Image3: String,
    Status: String,
    Sevierity: Boolean,
    CaseReporterId: Number,
    DuplicateCaseId: Number,
    Duplicate: Boolean,
    AmbulanceId: Number


});

const Case = mongoose.model('Case', caseSchema);

async function createCase(){
    const cases = new Case({ 
    CaseId: 601,    
    CaseTitle: 'Accident',
    CaseDesc: 'Bike Accident',
    AddressDesc: 'Mapusa',
    Lat: 7.62435,
    Lon: 14.4517,
    Image1: '/images',
    Image2: '/images',
    Image3: '/images',
    Status: 'Hospitalised',
    Sevierity: 1,
    CaseReporterId: 501,
    DuplicateCaseId: 3,
    Duplicate: 0  ,
    AmbulanceId : 401     
       
    });

    const result = await cases.save();
    console.log(result);
}

createCase();

module.exports = Case;