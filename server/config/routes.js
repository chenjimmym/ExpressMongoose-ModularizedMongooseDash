var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');

var dashboard = require('../controllers/dashboard.js')
module.exports = function(app) {

    app.get('/', function(request, response){
        dashboard.index(request, response);
    })
    
    app.get('/dogs/new', function(request, response){
        dashboard.add(request, response);
    })
    
    app.post('/dogs', function(request, response){
        dashboard.addProcess(request,response);
    })
    
    app.get('/dogs/edit/:id', function(request, response){
        dashboard.edit(request,response);
    })
    
    app.post('/dogs/delete/:id', function(request, response){
        dashboard.delete(request,response);    
    })
    
    app.post('/dogs/:id', function(request, response){
        dashboard.update(request,response);
    })
    
    app.get('/dogs/:id', function (request, response){
        dashboard.show(request, response);
    });
}