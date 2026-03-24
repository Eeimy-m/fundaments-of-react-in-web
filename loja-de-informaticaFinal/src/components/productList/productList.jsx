import React from 'react';
import './productList.css'

const ProductList = ({ listaProdutos }) => {
  
  function getImagemMarca(marca) {
    switch (marca) {
      case 'HP': return '/images/hp-logo.jpg'; 
      case 'Dell': return '/images/dell-logo.jpg';
      case 'Positivo': return '/images/positivo-logo.png';
      case 'ASUS': return '/images/asus-logo.png';
      default: return ''; 
    }
  }

  return (
    <div className="lista-container">
      <h2>Produtos Cadastrados ({listaProdutos.length})</h2>
      
      {listaProdutos.length === 0 ? (
        <p className="mensagem-vazia">Nenhum produto cadastrado ainda. Preencha o formulário acima!</p>
      ) : (
        <div className="grid-produtos">
          {listaProdutos.map((item, index) => (
            <div key={index} className="card-produto">
              <img src={getImagemMarca(item.marca)} alt={`Logo ${item.marca}`} className="img-marca" />
              <div className="info-produto">
                <h3>{item.nome}</h3>
                <p className="preco-produto">R$ {item.preco}</p>
                <span className="tag-secao">{item.secao}</span>
                <span className={`tag-condicao ${item.condicao.toLowerCase()}`}>{item.condicao}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;