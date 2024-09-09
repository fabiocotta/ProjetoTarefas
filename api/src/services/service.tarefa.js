import repositoryTarefa from "../repositories/repository.tarefa.js";

async function Listar() {

    const tarefas = await repositoryTarefa.Listar();

    return tarefas;

}

async function Inserir(descricao) {

    //aqui fazemos a validacao

    if (!descricao)
        throw "Informe a descrição da tarefa";

    if (descricao.length < 5)
        throw "A descrição deve conter pelo menos 5 caracteres";

    const tarefa = await repositoryTarefa.Inserir(descricao);

    return tarefa;

}

async function Editar(id_tarefa, descricao) {


      //aqui fazemos a validacao

      if (!descricao)
        throw "Informe a descrição da tarefa";

    if (descricao.length < 5)
        throw "A descrição deve conter pelo menos 5 caracteres";
    const tarefa = await repositoryTarefa.Editar(id_tarefa, descricao);

    return tarefa;

}

async function Excluir(id_tarefa) {

    const tarefa = await repositoryTarefa.Excluir(id_tarefa);

    return tarefa;


}

async function StatusTarefa(id_tarefa, concluido) {

      //aqui fazemos a validacao

      if (!concluido)
        throw "Informa se a tarefa foi concluída";

    if (concluido != 0 && concluido != 1)
        throw "O parâmetro concluído não é válido (deve ser 0 ou 1)";

    const tarefa = await repositoryTarefa.StatusTarefa(id_tarefa, concluido);

    return tarefa;

}

export default { Listar, Inserir, Editar, Excluir, StatusTarefa };