import repositoryTarefa from "../repositories/repository.tarefa.js";

async function Listar() {

    const tarefas = await repositoryTarefa.Listar();

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