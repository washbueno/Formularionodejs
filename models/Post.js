const db = require('./db')

const Post = db.sequelize.define('formulario', {
    nome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.STRING
    },
    aniversario: {
        type: db.Sequelize.DATE
    }
})



module.exports = Post

// Gerar tabela
//Post.sync({force: true})