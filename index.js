const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/Post')

//Config
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");
//Pasta pública
app.use(express.static('public'));
//Body-Parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
//Rotas acessar formulário
app.get('/', function (req, res) {
    res.render('home')
})

app.get('/cad', function (req, res) {
    res.render('formulario')
})
//Rota enviar formulario
app.post('/add', function (req, res) {
    Post.create({
        nome: req.body.title,
        idade: req.body.age,
        mensagem: req.body.description,
        aniversario: req.body.birthdate
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send("Houve uma falha" + erro)
    })
})
//Rota Servidor Rodando
app.listen(8081, function () {
    console.log("Servidor rodando");
});