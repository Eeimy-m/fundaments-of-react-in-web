import './App.css'
import DropDown from './components/dropDown/dropDown.jsx';
import { useState } from 'react';

function App() {

const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    secao: '',
    marca: ''
});

  function handleChange(e) {
    const { name, value } = e.target;

    setProduto({
      ...produto,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Produto Cadastrado com Sucesso!
    Nome: ${produto.nome}
    Preço: R$ ${produto.preco}
    Seção: ${produto.secao}
    Marca: ${produto.marca}`);
  }
  return (
    <div>

      <h1>Dados do produto</h1>

      <form action="">

        <DropDown 
        label = "Seção"
        name = "secao"
        options = {["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"]}
        onChange = {handleChange}
        />


        <DropDown 
        label = "Marca"
        name = "marca"
        options = {["hp", "dell", "positivo", "asus"]}
        onChange = {handleChange}
        />

      </form>

    </div>
  );

}

export default App