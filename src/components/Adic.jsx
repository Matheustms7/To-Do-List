import { useState } from "react";
import "./Adic.module.css";

function Adic() {
    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState([]);

    function adicionarItem() {
        if (texto.trim() === "") return;

        setLista([...lista, texto]);
        setTexto("");
    }

    function deletarItem(index) {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
    }


    function deleteAll(){
        setLista([]);
    }

    return (
        <div>
            <h1>Lista</h1>

            <input
                type="text"
                placeholder="Adicionar item"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button onClick={adicionarItem}>
                Adicionar
            </button>

            

            <ul>
                {lista.map((item, idlist) => (
                    
                    <li key={idlist}>
                        <input type="checkbox"/>
                        <span>{item}</span>
                        <button onClick={() => deletarItem(idlist)}>Deletar</button>
                    </li>
                ))}
            </ul>
            <button onClick={deleteAll}>Reset</button>
        </div>
    );
}

export default Adic;