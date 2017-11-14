var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');

module.exports = {
    index: function(request, response){
        Dog.find({}, function(error, dogs){
            // console.log(dogs);
            response.render('index', {dogs: dogs})
        })
    },
    add: function(request, response){
        response.render('add');
    },
    addProcess: function(request, response){
        console.log('@@@', request.body);
        var dog = new Dog({name: request.body.name, color: request.body.color});
        dog.save(function(error){
            if (error){
                console.log('there is error');
            } else {
                console.log('successfully added');
                response.redirect('/');
            }
        })
    },
    edit: function(request, response){
        response.render('edit', {id: request.params.id});
    },
    delete: function(request, response){
        Dog.remove({_id: request.params.id}, function (error){
            if (error) {
                console.log("Error");
            } else {
                response.redirect('/');
            }
        });
    },
    update: function(request, response){
        Dog.update({_id: request.params.id},{$set:{color: request.body.color}}, function(error, result){
            if (error) {
                console.log(error);
            } else {
                console.log('updatedddddddddd');
                response.redirect('/');
            }
        });
    },
    show: function (request, response){
        // console.log("The user id requested is:", req.params.id);
        Dog.find({_id:request.params.id}, function(error, dog){
            console.log(dog);
            response.render('dog', {dog:dog})
        })
        // res.send("You requested the user with id: " + req.params.id);
    }
}