import Item from "./Item";

export default function ItemList(props) {
  return (
    <>
      {props.loading ? (
        <h1>Cargando...</h1>
      ) : (
        props.products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      )}
    </>
  );
}
