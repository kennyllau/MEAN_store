var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    name: String,
    created_at: {type: Date, default: Date.now}    
});

mongoose.model('Customerdb', CustomerSchema);
// Validations

// CustomerSchema.path('name').required(true, 'Name cannot be blank');
