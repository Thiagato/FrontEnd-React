import { useEffect, useState } from "react";
import { Endereco } from "../../../models/Endereco";

function CepConsultar(){
//Evento de carregamento do componente
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    useEffect(() => {

    }, []);


    function carregarCep(){
        //Fetch ou axios
        //fetch == buscar
        fetch("https://viacep.com.br/ws/"+ cep +"/json/")
        .then((resposta) =>
            resposta.json()
        )
        .then((endereco: Endereco) => {
            setRua(endereco.logradouro);
            setBairro(endereco.bairro);
            setCidade(endereco.localidade);          
        });
    }
    return(
        
    
        <div>
            <h1>Consultar CEP</h1>
           <input 
           type="text"
           placeholder="Digite seu CEP"
           onBlur={carregarCep}
           onChange={
            (e : any) => setCep(e.target.value)
           }
    
        />
            

            <p>Rua {rua}</p>
            <button> vc mora no bairro: {bairro}</button>
            <input type="text" disabled value={cidade}/>
        </div>

       
    )
}

export default CepConsultar;