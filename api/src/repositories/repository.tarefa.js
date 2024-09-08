import { query } from "../database/sqlite.js";



async function Listar() {

    let sql = "select * from tarefa order by id_tarefa desc";
    const tarefas = await query(sql, []);

    return tarefas;

}

async function Inserir(descricao) {

    const tarefa = {};

    return tarefa;

}

async function Editar(id_tarefa, descricao) {

    const tarefa = {}

    return tarefa;

}

async function Excluir(id_tarefa) {

    const tarefa = {};

    return tarefa;


}

export default { Listar, Inserir, Editar, Excluir };