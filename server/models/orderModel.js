var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    name: String,
    item: String,
    quantity: Number,
    created_at: {type: Date, default: Date.now}  
});

mongoose.model('Orderdb', OrderSchema);
// Validations

// OrderSchema.path('name').required(true, 'Name cannot be blank');
// OrderSchema.path('item').required(true, 'Item cannot be blank');
// OrderSchema.path('quantity').required(true, 'Quantity cannot be blank');