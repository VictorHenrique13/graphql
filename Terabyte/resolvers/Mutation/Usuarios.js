const bcrypt = require('bcrypt-nodejs');
const db = require('../../config/db');
module.exports = {
    async cadastrarUsuario(_,{nome, data_nascimento, curso, telefone, periodo, matricula, email, senha, cpf, rg, fk_perfil}){
       if(nome === null || data_nascimento === null || curso === null|| telefone === null || periodo === null || matricula === null || email === null|| senha === null || cpf === null || rg === null||fk_perfil === null ){
           return -1;
       }else if (nome == "" || data_nascimento == "" || curso == "" || telefone == "" || periodo == "" || matricula == "" || email == "" || senha == "" || cpf == "" || rg == "" ||fk_perfil == ""){
            return -2
       }else{
            const salt = bcrypt.genSaltSync();
            senha = bcrypt.hashSync(senha,salt)
           const novo = {nome:nome, data_nascimento: data_nascimento, curso:curso, telefone:telefone, periodo:periodo, matricula:matricula, email:email, senha:senha, cpf: cpf, rg: rg, fk_perfil:fk_perfil};
           try{
               const [id] = await  db('Usuarios').insert(novo)
               return id;
           }catch (e) {
               console.log('Errors: ' + e);
           }
       }

    }
}
