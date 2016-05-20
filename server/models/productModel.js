var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    productname: String,
    image: String,
    description: String,
    quantity: Number,
    created_at: {type: Date, default: Date.now}    
});

mongoose.model('Productdb', ProductSchema);
// Validations

// ProductSchema.path('name').required(true, 'Name cannot be blank');
// ProductSchema.path('description').required(true, 'Description cannot be blank');

