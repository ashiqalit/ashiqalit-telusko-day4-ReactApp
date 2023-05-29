import React, { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [place, setPlace] = useState('');
  const [warranty, setWarranty] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleWarrantyChange = (event) => {
    setWarranty(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      name: name,
      type: type,
      place: place,
      warranty: parseInt(warranty),
    };

    try {
      await fetch('/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      console.log('Product added successfully!');
      // Reset form inputs
      setName('');
      setType('');
      setPlace('');
      setWarranty('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <input type="text" value={type} onChange={handleTypeChange} />
        </label>
        <label>
          Place:
          <input type="text" value={place} onChange={handlePlaceChange} />
        </label>
        <label>
          Warranty:
          <input
            type="number"
            value={warranty}
            onChange={handleWarrantyChange}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
