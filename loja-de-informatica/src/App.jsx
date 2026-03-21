import './App.css'
import dropDown from './compnents/dropDown/dropDown';

function App() {

  return (
    <div>
      <h1>Dados do produto</h1>
      
      <h3>Seção</h3>
      <dropDown />

      <h3>Marca</h3>
      <dropDown />

    </div>
  );

}

export default App