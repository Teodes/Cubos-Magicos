import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryItem = doc(db, "items", "zvXEVOP0n6LyBWLSnmOG");
    getDoc(queryItem)
      .then((resp) => {
        setItem({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
}
