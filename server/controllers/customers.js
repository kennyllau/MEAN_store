var mongoose = require('mongoose');
var Customerdb = mongoose.model('Customerdb');

module.exports = (function() {
	return {
		getCustomers: function(req, res){
			Customerdb.find({}, function(err, customers){
				if(err){
					console.log(err);
					console.log("error in server getCustomers");
				} else {
					res.json(customers);
				}
			})
		},
		addCustomer: function(req, res){
			var newCustomer = new Customerdb(req.body);
			newCustomer.save(function(err, customer){
				if(err){
					console.log(err,"error in server addCustomer");
					console.log(err.errors);
					
				} else {
					res.json(newCustomer);
				}
			})
		},
		destroyCustomer: function(req, res){
			Customerdb.remove({_id: req.params.id}, function(err, cust){
				if(err){
					console.log(err);
					console.log("error in server destroyCustomer");
				} else {
					res.json(cust);
				}
			})
		}, 
		// getCustomer: function(req, res){
		// 	Customerdb.findOne({_id: req.params.id}, function(err, cust){
		// 		if(err){
		// 			console.log(err);
		// 			console.log("error in server getCustomer");
		// 		} else {
		// 			res.json(cust);
		// 		}
		// 	})
		// },
		get3Customers: function(req, res){
			Customerdb.find().limit(3).exec(function(err, data){
				if(err){
					console.log(err);
					console.log("error in server get3Customers");
				} else {
					res.json(data);
				}
			})
		}, 
		updateCustomer: function(req, res){
			// Customerdb.findOneAndUpdate({_id: req.params.id}, req.body, function(err, cust){
			// 	if(err){
			// 		console.log(err);
			// 	} else {
			// 		console.log(cust);
			// 	}
			// })
			Customerdb.findOne({_id: req.params.id}, function(err, cust){
				if(err){
					console.log('could not find customer or something happened update mongoose');
				} else {
					cust.name = req.body.name
					cust.save(function(err, updatedCustomer){
						if(err){
							console.log(err);
							console.log('saving updated customer');
						} else {
							res.json(updatedCustomer);
						}
					})
				}
			})
		}
	}
})();