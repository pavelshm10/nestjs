import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import classes from "../products/ProductList.module.scss";
import { createWebSocketConnection } from "../../websocket";
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from "../../grapghQl/quries";

const ProductList = () => {
  const apiBaseUrl = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState<Product[]>([]);
  //graphQl
  // const { loading, error, data } = useQuery<{ products: Product[] }>(GET_PRODUCTS);

  //graphQl
  // useEffect(()=>{
  //   // console.log({data});
  //   if(!data) return;
  //   setProducts(data.products);
  // },[data])
  // const [ws, setWs] = useState<any>(null);
  
  // const [error, setError] = useState<any>(null);

  /*web socket*/
  // useEffect(() => {
  //   const socket = new WebSocket('wss://localhost:3000');

  //   socket.onopen = () => {
  //     console.log('Connected to WebSocket server');
  //     socket.send('getProducts'); // Request product data
  //   };

  //   socket.onmessage = (event) => {
  //     try {
  //       const data = JSON.parse(event.data);
  //       console.log("test ",data.data);
  //       if (data.error) {
          
  //         setError(data.error);
  //       } else {
          
  //         setProducts(data.data);
  //       }
  //     } catch (e) {
  //       console.error('Error parsing message:', e);
  //       setError('Failed to parse response');
  //     }
  //   };

  //   socket.onclose = () => {
  //     console.log('Disconnected from WebSocket server');
  //   };

  //   setWs(socket);

  //   return () => {
  //     if (socket) {
  //       socket.close();
  //     }
  //   };
  // }, []);


  //regular fetch
  useEffect(() => {
    console.log({ apiBaseUrl });
    if (!apiBaseUrl) return;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/products`, {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // credentials: "include",
        });
        console.log({ response });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [apiBaseUrl]);



  return (
    <div>
      <h1>Product List</h1>
      <ul className={classes.container}>
        {products?.map((product) => (
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
