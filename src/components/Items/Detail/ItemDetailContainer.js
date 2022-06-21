import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [qty, setQty] = useState(1);
  const [item, setItem] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch("/productsData.json")
      .then((res) => res.json())
      .then((data) => {
        setItem(data.find((prod) => prod.id === id));
      });
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} qty={qty} setQty={setQty} />
    </div>
  );
}
