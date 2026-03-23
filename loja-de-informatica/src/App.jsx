import './App.css'
import DropDown from './components/dropDown/dropDown.jsx';
import ProductList from './components/productList/productList.jsx';
import { useState } from 'react';

function App() {

  const [produto, setProduto] = useState({
      nome: '',
      preco: '',
      secao: '',
      marca: '',
      condicao: ''
  });
  const [listaProdutos, setListaProdutos] = useState([]);


  function handleChange(e) {
    const { name, value } = e.target;
    

    setProduto({
      ...produto,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setListaProdutos([...listaProdutos, produto]);
    setProduto({ nome: '', preco: '', secao: '', marca: '', condicao: '' });
  }
  return (
    <div className="layout-principal">
      <div className="app-container">

      <h1>Dados do produto</h1>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Nome do Produto</label>
          <input type="text" name="nome" placeholder="Ex: Mouse sem fio" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Preço (R$)</label>
          <input type="number" name="preco" placeholder="Ex: 150.00" onChange={handleChange} required />
        </div>

        <DropDown 
        label = "Seção"
        name = "secao"
        options = {["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"]}
        onChange = {handleChange}
        />


        <DropDown 
        label = "Marca"
        name = "marca"
        options = {["HP", "Dell", "Positivo", "ASUS"]}
        onChange = {handleChange}
        />

        <div className="radio-group">
          <label>Condição do Produto:</label>
          <div className="radio-options">
            <label>
              <input 
                type="radio" 
                name="condicao" 
                value="Novo" 
                onChange={handleChange} 
                checked={produto.condicao === 'Novo'} 
                required 
              /> Novo
            </label>
            
            <label>
              <input 
                type="radio" 
                name="condicao" 
                value="Usado" 
                onChange={handleChange} 
                checked={produto.condicao === 'Usado'} 
                required 
              /> Usado
            </label>
          </div>
        </div>

        <button type="submit" className="btn-salvar">Inserir Produto</button>
      </form>
      </div>
      <ProductList listaProdutos={listaProdutos} />
    </div>
  );

}

export default App