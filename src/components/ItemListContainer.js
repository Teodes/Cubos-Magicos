import Product from "./Product";
import cube2 from "../images/cube2.jpg";
import cube3 from "../images/cube3.jpg";
import cube4 from "../images/cube4.jpg";
import cuboide335 from "../images/cuboide335.jpg";
import cuboide336 from "../images/cuboide336.jpg";
import cuboide339 from "../images/cuboide339.jpg";
import gear3 from "../images/gear3.jpg";
import mirror3 from "../images/mirror3.jpg";
import skew from "../images/skew.png";
import pyraminx from "../images/pyraminx.jpg";
import kilominx from "../images/kilominx.jpg";
import megaminx from "../images/megaminx.jpg";
import { Container } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  return (
    <div className="ItemListContainer">
      {greeting}
      <Container className="d-flex flex-wrap justify-content-around">
        <Product name="2x2x2" stock={23} src={cube2} />
        <Product name="3x3x3" stock={31} src={cube3} />
        <Product name="4x4x4" stock={18} src={cube4} />
        <Product name="3x3x5" stock={7} src={cuboide335} />
        <Product name="3x3x6" stock={5} src={cuboide336} />
        <Product name="3x3x9" stock={4} src={cuboide339} />
        <Product name="Gear" stock={3} src={gear3} />
        <Product name="Mirror" stock={15} src={mirror3} />
        <Product name="Skew" stock={9} src={skew} />
        <Product name="Pyraminx" stock={13} src={pyraminx} />
        <Product name="Kilominx" stock={6} src={kilominx} />
        <Product name="Megaminx" stock={8} src={megaminx} />
      </Container>
    </div>
  );
}

export default ItemListContainer;
