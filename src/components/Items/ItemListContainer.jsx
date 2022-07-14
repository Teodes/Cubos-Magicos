import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    getDocs(
      category
        ? query(queryCollection, where("category", "==", category))
        : queryCollection
    )
      .then((resp) =>
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
