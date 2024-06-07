import { useEffect, useState } from "react";
import { Produto } from "./Produto";


function ProdutoListar(){
//Evento de carregamento do componente

  const[produtos, setProdutos] = 
  //falar que produto é um array se não ele fica do tipo never
        useState<Produto[]>([]);
    useEffect(() => {
        carregarProdutos();
    }, []);

    function carregarProdutos(){
        //Fetch ou axios
        //fetch == buscar
        fetch("http://localhost:5225/api/produto/listar")
        .then((resposta) =>
            resposta.json()
        )
        .then((produtos : Produto[]) => {
            console.log(produtos);
            setProdutos(produtos);
                  
        });
        
    }
    function CadastrarProdutos(){
        const produto : Produto = {
            nome : "Brito",
            descicao : "gosto bem L",
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
            console.log(produto);
            
                  
        });
        
    }
    return(
        <div>
   
            <h1>Listar Produtos AHAHAHAHAHAHHAAHHAAAHAHAHaHAHAH Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, impedit. Veniam, id hic.</h1>
            <button onClick={CadastrarProdutos}>Cadastrar</button>
            <table border={30}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descricao</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {produtos.map(item => (

                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.descicao}</td>
                        <td>{item.valor}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.criadoEm}</td>
                    </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default ProdutoListar;