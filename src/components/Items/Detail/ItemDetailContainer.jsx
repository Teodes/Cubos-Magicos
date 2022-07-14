import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "../../Utilities/Loading";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryItem = doc(db, "items", id);
    getDoc(queryItem)
      .then((resp) => {
        setItem({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {loading ? <Loading /> : <ItemDetail item={item} />}
    </div>
  );
}
