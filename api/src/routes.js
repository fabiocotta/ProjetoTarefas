import { Router } from "express";
import controllerTarefa from "./controllers/controller.tarefa.js";

const router = Router();

router.get("/tarefas", controllerTarefa.Listar);
router.post("/tarefas", controllerTarefa.Inserir);
router.put("/tarefas/:id_tarefa", controllerTarefa.Editar);
router.delete("/tarefas/:id_tarafa", controllerTarefa.Excluir);

export default router;