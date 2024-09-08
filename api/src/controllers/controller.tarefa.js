
async function Listar(req, res) {

const tarefas = [];

    res.status(200).json(tarefas);
    
}

async function Inserir(req, res) {

    const tarefa = {};

    res.status(201).json(tarefa);
    
}

async function Editar(req, res) {

    const tarefas = {}

    res.status(200).json(tarefas);
    
}

async function Excluir(req, res) {

    const tarefa = {};
    res.status(200).json(tarefa);
    
    
}

export default {Listar, Inserir, Editar, Excluir};