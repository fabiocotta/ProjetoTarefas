import { query } from "../database/sqlite.js";

async function Listar() {

    let sql = "select * from tarefa order by id_tarefa desc";
    const tarefas = await query(sql, []);

    return tarefas;

}

async function Inserir(descricao) {

    let sql = "insert into tarefa(descricao, concluido) values(?, ?) returning id_tarefa";

    const tarefa = await query(sql, [descricao, 0]);

    return tarefa[0];

}

async function Editar(id_tarefa, descricao) {

    let sql = "update tarefa set descricao=? where id_tarefa=?";
    const tarefa = await query(sql, [descricao, id_tarefa]);

    return { id_tarefa };

}

async function Excluir(id_tarefa) {

    let sql = "delete from tarefa where id_tarefa=?";

    await query(sql, [id_tarefa]);

    return { id_tarefa };


}

async function StatusTarefa(id_tarefa, concluido) {

    let sql = "update tarefa set concluido=? where id_tarefa=?";
    const tarefa = await query(sql, [concluido, id_tarefa]);

    return { id_tarefa };

}

export default { Listar, Inserir, Editar, Excluir, StatusTarefa };