import React, { useState } from 'react';

const ProductDetails = () => {
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState(null);

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`/product/{name}/${productName}`); // Update the endpoint as per your backend API
      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      <input
        type="text"
        placeholder="Enter product name"
        value={productName}
        onChange={handleInputChange}
      />
      <button onClick={fetchProductDetails}>Fetch Details</button>
      {productDetails && (
        <div>
          <h3>Product Details:</h3>
          <p>ID: {productDetails.id}</p>
          <p>Name: {productDetails.name}</p>
          <p>Type: {productDetails.type}</p>
          <p>Place: {productDetails.place}</p>
          <p>Warranty: {productDetails.warranty}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
