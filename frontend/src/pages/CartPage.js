import { useContext } from 'react';
import { CartContext } from '../CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} (x{item.qty})</span>
              <span>₹{item.price * item.qty}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ₹{total}</h3>
        {cart.length > 0 && <button>Checkout (Cash on Delivery)</button>}
      </div>
    </div>
  );
}
