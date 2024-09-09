import serviceTarefa from "../services/service.tarefa.js";

async function Listar(req, res) {

    try {
        const tarefas = await serviceTarefa.Listar();
        res.status(200).json(tarefas);

    } catch (err) {
        res.status(500).json({error: err});
    }



}

async function Inserir(req, res) {

    try {
        const { descricao } = req.body;
        const tarefa = await serviceTarefa.Inserir(descricao);
    
        res.status(201).json(tarefa);
        
    } catch (err) {
        res.status(500).json({error: err});
        
    }

   

}

async function Editar(req, res) {

    try {
        const id_tarefa = req.params.id_tarefa;
        const { descricao } = req.body;
        const tarefa = await serviceTarefa.Editar(id_tarefa, descricao);
    
        res.status(200).json(tarefa);
        
    } catch (err) {
        res.status(500).json({error: err});
        
    }

 

}

async function Excluir(req, res) {
    try {
        const id_tarefa = req.params.id_tarefa;
        const tarefa = await serviceTarefa.Excluir(id_tarefa);
    
        res.status(200).json(tarefa);
        
    } catch (err) {
        res.status(500).json({error: err});
        
    }

  


}

async function StatusTarefa(req, res) {
    try {
        const id_tarefa = req.params.id_tarefa;
        const { concluido } = req.body; //0 ou 1... 
    
        const tarefa = await serviceTarefa.StatusTarefa(id_tarefa, concluido);
    
        res.status(200).json(tarefa);
        
    } catch (err) {
        res.status(500).json({error: err});
        
    }

 

}


export default { Listar, Inserir, Editar, Excluir, StatusTarefa };