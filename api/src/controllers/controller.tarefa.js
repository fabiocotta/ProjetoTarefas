import serviceTarefa from "../services/service.tarefa.js";

async function Listar(req, res) {

    const tarefas = await serviceTarefa.Listar();

    res.status(200).json(tarefas);

}

async function Inserir(req, res) {

    const { descricao } = req.body;
    const tarefa = await serviceTarefa.Inserir(descricao);

    res.status(201).json(tarefa);

}

async function Editar(req, res) {

    const id_tarefa = req.params.id_tarefa;
    const { descricao } = req.body;
    const tarefa = await serviceTarefa.Editar(id_tarefa, descricao);

    res.status(200).json(tarefa);

}

async function Excluir(req, res) {

    const id_tarefa = req.params.id_tarefa;
    const tarefa = await serviceTarefa.Excluir(id_tarefa);
    res.status(200).json(tarefa);


}

export default { Listar, Inserir, Editar, Excluir };