/**
 * Created by gabri on 04/07/2017.
 */
module.exports = (application)=>{
    application.get('/', function(req, res){
        application.app.controllers.index.index(application, req, res);
    });
}