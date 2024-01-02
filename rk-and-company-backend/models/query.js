const mongoose = require('mongoose');

const QueryModelSchema = new mongoose.Schema({
    name: String,
    designation: String,
    organization: String,
    officeAddress: String,
    city: String,
    emailAddress: String,
    telephoneNo: String,
    mobileNumber: String,
    professionalUpdates: String,
    querySubject: String,
    query: String,
})

const QueryModel = mongoose.model('log_reg_form', QueryModelSchema);

module.exports = QueryModel;