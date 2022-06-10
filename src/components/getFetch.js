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

let products = [
  {
    id: "1",
    name: "2x2x2",
    stock: "23",
    url: cube2,
  },
  {
    id: "2",
    name: "3x3x3",
    stock: "31",
    url: cube3,
  },
  {
    id: "3",
    name: "4x4x4",
    stock: "18",
    url: cube4,
  },
  {
    id: "4",
    name: "3x3x5",
    stock: "7",
    url: cuboide335,
  },
  {
    id: "5",
    name: "3x3x6",
    stock: "5",
    url: cuboide336,
  },
  {
    id: "6",
    name: "3x3x9",
    stock: "4",
    url: cuboide339,
  },
  {
    id: "7",
    name: "Gear",
    stock: "3",
    url: gear3,
  },
  {
    id: "8",
    name: "Mirror",
    stock: "15",
    url: mirror3,
  },
  {
    id: "9",
    name: "Skew",
    stock: "9",
    url: skew,
  },
  {
    id: "10",
    name: "Pyraminx",
    stock: "13",
    url: pyraminx,
  },
  {
    id: "11",
    name: "Kilominx",
    stock: "6",
    url: kilominx,
  },
  {
    id: "12",
    name: "Megaminx",
    stock: "8",
    url: megaminx,
  },
];

export const getFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
