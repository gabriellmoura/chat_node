/**
 * Created by gabri on 04/07/2017.
 */
module.exports.iniciaChat = (application, req, res)=>{
    const dadosForm = req.body;

    req.assert('apelido', 'Nome/Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome/Apelido deve conter entre 3 e 15 caracteres').len(3, 15);
    let erros = req.validationErrors();
    if (erros) {
        res.render("index", {erros});
        return;
    }

    const io = application.get('io');
    io.emit('msgParaCliente', {apelido: dadosForm.apelido, mensagem : ' acabou de entrar no chat'});

    res.render("chat", {dadosForm});
}