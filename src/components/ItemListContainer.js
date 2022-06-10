import { Container } from "react-bootstrap";

import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div className="ItemListContainer">
      {greeting}
      <Container className="d-flex flex-wrap justify-content-around">
        <ItemList />
      </Container>
    </div>
  );
}

export default ItemListContainer;
