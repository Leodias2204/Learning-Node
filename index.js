const express = require ("express") //Importando o express
const app = express(); //Iniciando o express

app.listen(4000,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor rodando normalmente")
    }
})

app.get("/ola/:nome/:empresa", function(req,res) {
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    const nome = req.params.nome
    const empresa = req.params.empresa
    res.send(`<h1>Olá ${nome}, bem vindo a ${empresa} minha empresa </h1>`);
})

app.get("/canal/:artigo?", function(req,res) {

    // Parametros opcionais 

    const artigo = req.params.artigo

    if(artigo) {
        res.send(`<h1>Bem vindo ao artigo ${artigo} </h1>`)
    } else {
        res.send("<h3>Olá seja bem vindo ao meu canal</h3>")
    }
})


app.get("/youtube", function(req, res) {
    const caractere = req.query["caractere"]

    if(caractere){
        res.send(caractere)
    } else {
        res.send ("<h1> Nenhum Canal Encontrado </h1>")
    }
})