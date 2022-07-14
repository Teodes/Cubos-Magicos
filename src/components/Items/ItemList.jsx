import Loading from "../Utilities/Loading";
import Item from "./Item";

export default function ItemList(props) {
  return (
    <>
      {props.loading ? (
        <Loading />
      ) : (
        props.products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      )}
    </>
  );
}
