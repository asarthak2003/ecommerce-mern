import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get('https://YOUR_RENDER_BACKEND_URL/api/products') 
      // ↑↑ REPLACE `https://YOUR_RENDER_BACKEND_URL` 
      // WITH YOUR RENDER BACKEND DEPLOY URL
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
