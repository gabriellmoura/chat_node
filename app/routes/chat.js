/**
 * Created by gabri on 04/07/2017.
 */
module.exports = (application)=>{
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}