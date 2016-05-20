var mongoose = require('mongoose');
var Orderdb = mongoose.model('Orderdb');
var Productdb = mongoose.model('Productdb');

module.exports = (function() {
	return {
		getOrders: function(req, res){
			Orderdb.find({}, function(err, orders){
				if(err){
					console.log(err);
					console.log("error in server getOrders");
				} else {
					console.log("got orders");
					res.json(orders);
				}
			})
		},
		addOrder: function(req, res){
			console.log(req.body.id, "hello need to get _id");
			
			var newOrder = new Orderdb({name: req.body.name, item: req.body.item, quantity: req.body.quantity, created_at: req.body.created_at});
			
			newOrder.save(function(err, order){
				if(err){
					console.log(err,"error in server addOrder");
					res.json(err);
				} 
				else {
					// console.log("add item is successful");
					// Productdb.findOne({_id: req.body.id}, function(err, item1){
					// 	console.log(item1);
					// 	var new_qty = item1.quantity - req.body.quantity;
					// 	Productdb.findOneAndUpdate({_id: req.body.id}, {quantity:new_qty}, function(err){
					// 		if(err){
					// 			console.log("DID NOT REDUCE PRODUCT");
					// 		}
					// 		else{
					// 			console.log("successfully reduce quantity");
					// 		}
					// 	});
					// });
					res.json(newOrder);
				}
			})
		},
		destroyOrder: function(req, res){
			Orderdb.remove({_id: req.params.id}, function(err, item){
				if(err){
					console.log(err);
					console.log("error in server destroyOrder");
				} else {
					res.json(item);
				}
			})
		}, 
		// getOrder: function(req, res){
		// 	Orderdb.findOne({_id: req.params.id}, function(err, item){
		// 		if(err){
		// 			console.log(err);
		// 			console.log("error in server getOrder");
		// 		} else {
		// 			res.json(item);
		// 		}
		// 	})
		// }, 

		get3Orders: function(req, res){
			Orderdb.find().limit(3).exec(function(err, data){
				if(err){
					console.log(err);
					console.log("error in server get3Orders");
				} else {
					res.json(data);
				}
			})
		},


		updateOrder: function(req, res){
			// Orderdb.findOneAndUpdate({_id: req.params.id}, req.body, function(err, cust){
			// 	if(err){
			// 		console.log(err);
			// 	} else {
			// 		console.log(cust);
			// 	}
			// })
			Orderdb.findOne({_id: req.params.id}, function(err, item){
				if(err){
					console.log('could not find order or something happened update mongoose');
				} else {
					item.name = req.body.name
					item.save(function(err, updatedOrder){
						if(err){
							console.log(err);
							console.log('saving updated order');
						} else {
							res.json(updatedOrder);
						}
					})
				}
			})
		}
	}
})();