import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch("/productsData.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.filter((items) => items.category === category));
        })
        .finally(() => setLoading(false));
    } else {
      fetch("/productsData.json")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [category]);
  return (
    <div className="ItemListContainer">
      ¡Bienvenidos a nuestra tienda!
      <Container className="d-flex flex-wrap justify-content-around">
        <ItemList products={products} loading={loading} />
      </Container>
    </div>
  );
}

export default ItemListContainer;
