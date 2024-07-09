import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import classes from './ProductList.module.scss';
import config from '../../config';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    // const apiUrl = process.env.REACT_APP_BASE_URL;
    useEffect(() => {
        // console.log({apiUrl});
        const fetchData = async () => {
          try {
            console.log({config})
            const response = await fetch(`${config.apiUrl}/api/products`);
            console.log({response})
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul className={classes.container}>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
