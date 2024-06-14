import { useState } from "react"
import { Produto } from "./Produto";
import { useNavigate } from "react-router-dom";
function ProdutoCadastrar(){
    const navigate = useNavigate();
    const[nome, setnome]= useState("");
function cadastrarProduto(e: any){
    e.preventDefault();
    const produto : Produto = {
        nome : nome,
        descricao : "gosto bem L",
        valor : 0,
        quantidade: 1
};
  //Fetch ou axios
        //fetch == buscar
        fetch("http://localhost:5225/api/produto/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(produto)
        })
        .then((resposta) =>
            resposta.json()
        )
        .then((produto : Produto) => {
            navigate("/pages/produto/listar");
        });
        
    }return (
        <div>
            <h1>Cadastrar Produto</h1>
        <form onSubmit={cadastrarProduto}>
        <label>Nome:</label>
        <input type="text"
         placeholder="Digite o nome"
         onChange={(e: any) => setnome(e.target.value)}
         required/>
        <br />
        <label>Descrição:</label>
        <input type="text"
        placeholder="Digite a descrição"
        onChange={(e: any) => setnome(e.target.value)}
         />
        <button type="submit">Cadastrar</button>
        </form>
        </div>
    )



}
export default ProdutoCadastrar;