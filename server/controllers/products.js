var mongoose = require('mongoose');
var Productdb = mongoose.model('Productdb');

module.exports = (function() {
	return {
		getProducts: function(req, res){
			Productdb.find({}, function(err, products){
				if(err){
					console.log(err);
					console.log("error in server getProducts");
				} else {
					res.json(products);
				}
			})
		},
		addProduct: function(req, res){
			var newProduct = new Productdb(req.body);
			newProduct.save(function(err, product){
				if(err){
					console.log(err,"error in server addProduct");
					console.log(err.errors);
					
				} else {
					res.json(newProduct);
				}
			})
		},
		destroyProduct: function(req, res){
			Productdb.remove({_id: req.params.id}, function(err, prod){
				if(err){
					console.log(err);
					console.log("error in server destroyProduct");
				} else {
					res.json(prod);
				}
			})
		}, 
		// getProduct: function(req, res){
		// 	Productdb.findOne({_id: req.params.id}, function(err, prod){
		// 		if(err){
		// 			console.log(err);
		// 			console.log("error in server getProduct");
		// 		} else {
		// 			res.json(prod);
		// 		}
		// 	})
		// },
		get5Products: function(req, res){
			Productdb.find().limit(3).exec(function(err, data){
				if(err){
					console.log(err);
					console.log("error in server getProducts");
				} else {
					res.json(data);
				}
			})
		},

		updateProduct: function(req, res){
			// Customerdb.findOneAndUpdate({_id: req.params.id}, req.body, function(err, cust){
			// 	if(err){
			// 		console.log(err);
			// 	} else {
			// 		console.log(cust);
			// 	}
			// })
			Productdb.findOne({_id: req.params.id}, function(err, prod){
				if(err){
					console.log('could not find product or something happened update mongoose');
				} else {
					prod.name = req.body.name
					prod.save(function(err, updatedProduct){
						if(err){
							console.log(err);
							console.log('saving updated product');
						} else {
							res.json(updatedProduct);
						}
					})
				}
			})
		}
	}
})();