import React from 'react';
import CepConsultar from './components/pages/cep/cep-consultar';
import ProdutoListar from './produto/produto-listar';
import ProdutoCadastrar from './produto/produto-cadastrar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
    <nav>
      <ul>
        <li>
         <Link to={'/'}>Home</Link>
        </li>
        <li>
        <Link to={'/pages/produto/listar'}>Listar Produto</Link>
        </li>
        <li>
        <Link to={'/pages/produto/cadastrar'}>cadastrar produto</Link>
        </li>
        <li>
        <Link to={'/pages/cep/consultar'}>consultar</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={<ProdutoListar />}/>
        <Route path='/pages/produto/listar' element={<ProdutoListar />}/>
        <Route path='/pages/produto/cadastrar' element={<ProdutoCadastrar />} />
        <Route path='/pages/cep/consultar' element={<CepConsultar />} />
      </Routes>

      <footer>
        <p>Desenvolvido por The consagrados</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
