import React from 'react';
import Soma from './Soma';
//1 - Um componente SEMPRE deve começar com a primeira letra
//maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML

function App() {
  return (
    <div className="App">
     <Soma></Soma>
     

    </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default App;
