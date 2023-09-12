const database = require('./database');
const Usuario = require('./usuario');

async function inicializar() {
    await database.sync();
}
inicializar();

//CREATE
/*
async function cadastarUsuario() {
    const novoUsuario = await Usuario.create({
        nome: "Elthon",
        idade: 22
    });
}
cadastarUsuario();
*/
//READ
async function consultaUsuario() {
    const consultaUsuario = await Usuario.findByPk(2);
    console.log(consultaUsuario);
}
consultaUsuario();

//UPDATE
/*
async function atualizaIdade() {
    const usuario = await Usuario.findByPk(1);
    usuario.idade = 33;
    usuario.save();
}
atualizaIdade();
*/
//DELETE
async function deletarUsuario() {
    await Usuario.destroy({
        where: {
            nome: 'Elthon'
        }
    })
}
deletarUsuario();