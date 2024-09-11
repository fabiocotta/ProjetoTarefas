import "./home.css";
import Tarefa from "../../components/tarefa/tarefa.jsx";
import TarefaEdit from "../../components/tarefa-edit/tarefa-edit.jsx";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import api from "../../utils/api.js";

function Home() {

    const [tarefas, setTarefas] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [erro, setErro] = useState("")

    function AddTarefa() {
        api.post("/tarefas", {
            descricao: descricao

        })
            .then(resp => {
                setErro("");
                setDescricao("");
                ListarTarefas();

            })
            .catch(err => {
                if (err.response.data.error)
                    setErro(err.response.data.error)
                else
                    setErro("Erro ao acessar os dados");
                console.log(err);

            })


    }

    const DeleteTarefa = (id_tarefa) => {
        api.delete("/tarefas/" + id_tarefa, {
        })
            .then(resp => {
                setErro("");
                ListarTarefas();
            })
            .catch(err => {
                if (err.response.data.error)
                    setErro(err.response.data.error)
                else {
                    setErro("Erro ao deleter o registro");
                }
                console.log(err);
            })

    }

    const EditTarefa = (id_tarefa) => {
        let novaLista = [];

        tarefas.map((tarefa) => {
            if (tarefa.id_tarefa == id_tarefa)
                tarefa.edit = 1;

            novaLista.push(tarefa);

        });

        setTarefas(novaLista);

    }

    const EditTarefaConfirma = (descricao, id_tarefa) => {
        api.put("/tarefas/" + id_tarefa, {
            descricao: descricao
        })
            .then(resp => {
                setErro("");
                ListarTarefas();
            })
            .catch(err => {
                if (err.response.data.error)
                    setErro(err.response.data.error)
                else {
                    setErro("Erro ao editar os dados");
                }
                console.log(err);
            })
    }

    const CancelarEditTarefa = (id_tarefa) => {
        let novaLista = [];

        tarefas.map((tarefa) => {
            if (tarefa.id_tarefa == id_tarefa) {
                tarefa.edit = 0;
            }


            novaLista.push(tarefa);
        });

        setTarefas(novaLista);

    }

    const TarefaConcluida = (id_tarefa, done) => {
        api.put("/tarefas/" + id_tarefa + "/status", {
            concluido: done ? 1 : 0
        })
            .then(resp => {
                setErro("");
                ListarTarefas();
            })
            .catch(err => {
                if (err.response.data.error)
                    setErro(err.response.data.error)
                else {
                    setErro("Erro ao concluir a tarefa");
                }
                console.log(err);
            })
    }

    const ListarTarefas = () => {
        api.get("/tarefas")
            .then(resp => {
                setTarefas(resp.data);

            })
            .catch(err => {
                console.log(err);

            });

    }

    useEffect(() => {
        ListarTarefas();
    }, []);

    return <div className="container">
        {
            erro.length > 0 && <div className="error">{erro}</div>
        }


        <h2>Quais são os planos para hoje?</h2>
        <div className="cad-tarefa">
            <input value={descricao} onChange={(e) => setDescricao(e.target.value)} className="tarefa-input" placeholder="Descreva sua tarefa..." type="text" name="tarefa" id="tarefa" />
            <button onClick={AddTarefa} className="tarefa-btn" >Inserir Tarefa</button>
        </div>

        <div className="lista-box">

            {
                tarefas.map((tarefa) => {

                    return tarefa.edit ?
                        <TarefaEdit key={tarefa.id_tarefa}
                            id_tarefa={tarefa.id_tarefa}
                            descricao={tarefa.descricao}
                            done={tarefa.concluido == 1 ? true : false }
                            onClickSave={EditTarefaConfirma}
                            onClickCancel={CancelarEditTarefa} />
                        :
                        <Tarefa key={tarefa.id_tarefa}
                            id_tarefa={tarefa.id_tarefa}
                            descricao={tarefa.descricao}
                            done={tarefa.concluido == 1 ? true : false}
                            onClickDelete={DeleteTarefa}
                            onClickEdit={EditTarefa}
                            onClickConcluir={TarefaConcluida} />
                })
            }
        </div>
    </div>
}
export default Home;