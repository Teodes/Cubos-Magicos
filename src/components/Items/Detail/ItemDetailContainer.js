import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const [qty, setQty] = useState(1);
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => {
        let random = Math.floor(Math.random() * data.length);
        setItem(data[random]);
      })
      .finally(console.log(item));
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} qty={qty} setQty={setQty} />
    </div>
  );
}
