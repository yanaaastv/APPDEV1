import { useState } from "react";

const products = [
  { id: 1, title: "Cabbage", price: 1.5, isFruit: false, popular: false },
  { id: 2, title: "Garlic", price: 2.0, isFruit: false, popular: true },
  { id: 3, title: "Apple", price: 3.25, isFruit: true, popular: true },
  { id: 4, title: "Mango", price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "120px",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{product.title}</h3>

      <p
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
          fontWeight: "bold",
          marginBottom: "8px",
        }}
      >
        ${product.price.toFixed(2)}
      </p>

      {product.popular && <p style={{ marginBottom: "10px" }}>⭐ Popular</p>}

      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  function handleRemoveFromCart() {
    setCartCount((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Mini Fruit & Veg Stand</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: 0 }}>
          {cartCount === 0 ? "Cart is empty" : `${cartCount} items in cart`}
        </p>

        <button onClick={handleRemoveFromCart}> Remove one</button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
