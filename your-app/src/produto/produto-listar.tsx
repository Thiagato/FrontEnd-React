import { useEffect, useState } from "react";
import { Produto } from "./Produto";
import axios from "axios";


function ProdutoListar(){
//Evento de carregamento do componente

  const[produtos, setProdutos] = 
  //falar que produto é um array se não ele fica do tipo never
        useState<Produto[]>([]);
    useEffect(() => {
        carregarProdutos();
    }, []);

    function carregarProdutos(){
       fetch("http://localhost:5225/api/produto/listar")
       .then((resposta) => resposta.json()
       ).then((produtos: Produto[]) =>{
        console.table(produtos);
        setProdutos(produtos);
       })
        
    }

    function deletar(id: string){
        console.log(`Id: ${id} nome: ${id}`);
        axios   
            .delete(`http://localhost:5225/api/produto/deletar/${id}`)
            .then((resposta) => {
                console.log(resposta.data);
                setProdutos(resposta.data);
            });

        
    }

    return(
        <div>
            <h1>Listar Produtos AHAHAHAHAHAHHAAHHAAAHAHAHaHAHAH Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, impedit. Veniam, id hic.</h1>
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
                    
                    {produtos.map(produtos => (

                        <tr key={produtos.id}>
                        <td>{produtos.id}</td>
                        <td>{produtos.nome}</td>
                        <td>{produtos.descricao}</td>
                        <td>{produtos.valor}</td>
                        <td>{produtos.quantidade}</td>
                        <td>{produtos.criadoEm}</td>
                        <td>
                            <button onClick={() => {deletar(produtos.id!)} }>Deletar</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default ProdutoListar;