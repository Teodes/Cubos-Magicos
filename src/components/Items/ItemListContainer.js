import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
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
    <div className="ItemListContainer">
      {greeting}
      <Container className="d-flex flex-wrap justify-content-around">
        <ItemList products={products} loading={loading} />
      </Container>
    </div>
  );
}

export default ItemListContainer;
