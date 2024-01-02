const mongoose = require('mongoose');

const CareerFormSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: String,
    gender: String,
    position: String,
    dob: String,
    highestQualification: String,
    resume: String,
    lastWorkedCompany: String,
    experienceYears: String,
    experienceMonths: String,
})

const CareerFormModel = mongoose.model('career_form', CareerFormSchema);

module.exports = CareerFormModel;