import { useEffect, useState } from "react";

function CepConsultar(){
//Evento de carregamento do componente
    const [Rua, setRua] = useState("");
    useEffect(() => {



        //Fetch ou axios
        //fetch == buscar
        fetch("https://viacep.com.br/ws/01001000/json/")
        .then((resposta) =>
            resposta.json()
        )
        .then((cep) => {
            console.log(cep.logradouro);
            setRua(cep.logradouro);
        })
    }, []);
    return(
        
        

        <div>
            <h1>Consultar CEP</h1>

            <p>{Rua}</p>
        </div>

       
    )
}

export default CepConsultar;