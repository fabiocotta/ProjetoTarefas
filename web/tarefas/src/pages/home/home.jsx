import "./home.css";
import Tarefa from "../../components/tarefa/tarefa.jsx";
import TarefaEdit from "../../components/tarefa-edit/tarefa-edit.jsx";
import { useState } from "react";
import { v4 } from "uuid";
import api from "../../utils/api.js";

function Home() {

    const [tarefas, setTarefas] = useState([]);
    const [descricao, setDescricao] = useState("");

    function AddTarefa() {
        let tarefa = {
            id: v4(),
            descricao: descricao,
            done: false,
            edit: false
        }

        setTarefas([...tarefas, tarefa]);
        setDescricao("");
    }

    const DeleteTarefa = (id) => {
        const novaLista = tarefas.filter((tarefa) => {
            return tarefa.id != id
        })

        setTarefas(novaLista)

    }

    const EditTarefa = (id) => {
        let novaLista = [];

        tarefas.map((tarefa) => {
            if (tarefa.id == id)
                tarefa.edit = true;

            novaLista.push(tarefa);
        });

        setTarefas(novaLista);
    }

    const EditTarefaConfirma = (descricao, id) => {
        let novaLista = [];

        tarefas.map((tarefa) => {
            if (tarefa.id == id) {
                tarefa.edit = false;
                tarefa.descricao = descricao;
            }


            novaLista.push(tarefa);
        });

        setTarefas(novaLista);

    }

    const CancelarEditTarefa = (id) => {
        let novaLista = [];

        tarefas.map((tarefa) => {
            if (tarefa.id == id) {
                tarefa.edit = false;
            }


            novaLista.push(tarefa);
        });

        setTarefas(novaLista);

    }

    const TarefaConcluida = (id, done) => {
        let novaLista = [];

        tarefas.map((tarefa) => {
            if (tarefa.id == id) {
                tarefa.done = done;
            }


            novaLista.push(tarefa);
        });

        setTarefas(novaLista);

    }

    return <div className="container">
        <h2>Quais são os planos para hoje?</h2>


        <div className="cad-tarefa">
            <input value={descricao} onChange={(e) => setDescricao(e.target.value)} className="tarefa-input" placeholder="Descreva sua tarefa..." type="text" name="tarefa" id="tarefa" />
            <button onClick={AddTarefa} className="tarefa-btn" >Inserir Tarefa</button>
        </div>

        <div className="lista-box">

            {
                tarefas.map((tarefa) => {

                    return tarefa.edit ?
                        <TarefaEdit key={tarefa.id}
                            id={tarefa.id}
                            descricao={tarefa.descricao}
                            done={tarefa.done}
                            onClickSave={EditTarefaConfirma}
                            onClickCancel={CancelarEditTarefa} />
                        :
                        <Tarefa key={tarefa.id}
                            id={tarefa.id}
                            descricao={tarefa.descricao}
                            done={tarefa.done}
                            onClickDelete={DeleteTarefa}
                            onClickEdit={EditTarefa}
                            onClickConcluir={TarefaConcluida} />

                })
            }

        </div>

    </div>
}

export default Home;