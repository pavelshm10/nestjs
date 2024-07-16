import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import classes from '../products/ProductList.module.scss';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const apiBaseUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        console.log({apiBaseUrl});
        if(!apiBaseUrl) return;
        const fetchData = async () => {
          try {
            const response = await fetch(`${apiBaseUrl}/api/products`);

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
      }, [apiBaseUrl]);

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
