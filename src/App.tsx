import { useState } from 'react';
import './styles/App.css';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType, ProductWithId } from './types';

function App() {
  const [rendered, setRendered] = useState(false);
  const [products, setProducts] = useState<ProductWithId[]>([]);

  const handleSubmit = (productInfo: ProductType): void => {
    setProducts([...products, { ...productInfo, id: Date.now() }]);
  };

  const handleDelete = (id: string | number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="app">
      <header>
        <button onClick={ () => setRendered(false) }>Cadastrar</button>
        <button onClick={ () => setRendered(true) }>Ver produtos</button>
      </header>
      { !rendered && <RegisterProduct handleSubmit={ handleSubmit } /> }
      { rendered && <ListProducts products={ products } handleDelete={ handleDelete } /> }
    </div>
  );
}

export default App;
