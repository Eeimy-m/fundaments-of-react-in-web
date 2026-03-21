import './App.css'
import dropDown from './compnents/dropDown/dropDown';

function App() {

  function handleChange(e) {
    const { name, value } = e.target;

    setProduto({
      ...produto,
      [name]: value
    });
  }

  return (
    <div>

      <h1>Dados do produto</h1>

      <form action="">

        <dropDown 
        label = "Seção"
        name = "secao"
        options = {[Computadores, Acessórios, Impressoras, Games, Gadgets]}
        onChange = {handleChange}
        />

        <h3>Marca</h3>
        <dropDown />

      </form>

    </div>
  );

}

export default App