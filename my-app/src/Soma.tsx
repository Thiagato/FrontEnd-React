import React, { useState } from 'react';
//1 - Um componente SEMPRE deve começar com a primeira letra
//maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML

function Soma() {
    const [contador, setContador] = useState(0);
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setresult] = useState(0);

        function incrementarContador(){
            setContador(contador + 1);
            console.log(contador);
        }
        function somar(){
          const result = parseFloat(num1) + parseFloat(num2);
          console.log(result);
          setresult(result);
        }

        function digitarNum1(e: any){
            console.log(e.target.value);
            setNum1(e.target.value);
      

        }
        function digitarNum2(e: any){
            console.log(e.target.value);
            setNum1(e.target.value);
      
        }
        return(
        <div>

        <label>num 1:</label>
        <input value={num1} onChange={(e) => setNum1(e.target.value)} type="text" />
        
        <label>num 2:</label>
        <input value={num2} onChange={(e) => setNum2(e.target.value)} type="text" />

        <button onClick={incrementarContador} >Contador</button>

        <button onClick={somar}>Somar</button>
        <p>
            resultado:
            {result}
            
        </p>
        <p>
            contador:
            {contador}
            
        </p>


        </div>
     );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default Soma;
