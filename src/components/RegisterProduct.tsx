import React, { useState } from 'react';
import Product from './Product';
import '../styles/RegisterProduct.css';
import { ProductType } from '../types';

const INITIAL_STATE = {
  name: '',
  price: 0,
  description: '',
  tags: '',
  image: '',
};

type Props = {
  handleSubmit: (productInfo: ProductType) => void
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit } = props;
  const [productInfo, setProductInfo] = useState<ProductType>(INITIAL_STATE);
  //   {
  //   name: '',
  //   price: 0,
  //   description: '',
  //   tags: '',
  //   image: '',
  // };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(productInfo);
    setProductInfo(INITIAL_STATE);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // setProductInfo({
    //   ...productInfo,
    //   [name]: Number(value) || value,
    // });

    setProductInfo({
      ...productInfo,
      [name]: (name === 'price') ? Number(value) : value,
    });
  };

  const { name, description, price, image, tags } = productInfo;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setProductInfo({
        ...productInfo,
        image: URL.createObjectURL(selectedImage),
      });
    }
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              name="name"
              value={ name }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              value={ description }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              id="price"
              name="price"
              value={ price }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="file"
              id="image"
              name="image"
              onChange={ handleImageChange }
              accept="image/*"
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              name="tags"
              value={ tags }
              onChange={ handleChange }
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ productInfo } />
      </div>
    </main>
  );
}
