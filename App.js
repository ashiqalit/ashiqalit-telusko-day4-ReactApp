import React from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';

const App = () => {
  return (
    <div>
      <ProductList />
      <ProductDetails />
      <AddProduct />
    </div>
  );
};

export default App;
