import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch("/productsData.json")
      .then((res) => res.json())
      .then((data) => {
        setItem(data.find((prod) => prod.id === id));
      });
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
}
