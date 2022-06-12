import { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => {
        setLoading(false);
      }, []);
  });
  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        products.map((product) => (
          <Item
            name={product.name}
            key={product.id}
            stock={product.stock}
            src={product.img}
          />
        ))
      )}
    </>
  );
}
