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
        border: "0.5px solid #ccc",
        borderRadius: "5px",
        padding: "16px",
        width: "90px",
        textAlign: "center",
      }}
    >
      <h3>{product.title}</h3>

      <p
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        ${product.price.toFixed(2)}
      </p>

      {product.popular && "⭐ Popular"}

      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>Mini Fruit & Veg Stand</h1>

      <p>{cartCount === 0 ? "Cart is empty" : `${cartCount} items in cart`}</p>

      <div
        style={{
          display: "flex",
          gap: "12px",
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
