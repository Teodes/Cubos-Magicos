import Item from "./Item";

export default function ItemList(props) {
  return (
    <>
      {props.loading ? (
        <h1>Cargando...</h1>
      ) : (
        props.products.map((product) => (
          <Item
            name={product.name}
            key={product.id}
            stock={product.stock}
            src={product.img}
          />
        ))
      )}
    </>
  );
}
