import React, { useEffect, useState } from "react";
const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("./products.json");
        const data = await res.json();
        console.log(data);
        setProduct(data.products);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getProducts();
  }, []);
return (
  <div>
    <h1>Products Page</h1>
    <div className="products-grid">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <h2>{p.name}</h2>
          <p>Category: {p.category}</p>
          <p>Ratings: {p.rating}</p>
          <p className="price">₹{p.price}</p>
        </div>
      ))}
    </div>
  </div>
);

};

export default Products;
