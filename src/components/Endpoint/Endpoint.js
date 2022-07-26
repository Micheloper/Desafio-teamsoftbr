import { useEffect, useState } from "react";
import axios from "axios";
import AppBody from "../AppBody/AppBody.js";
import "./Endpoint.css";

export default function Endpoint() {
  const [product, setProduct] = useState(null);

  const apiUrl =
    "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products";

  async function pullJson() {
    const res = await axios.get(apiUrl);
    const resData = await res.data[0];
    setProduct(resData);
  }
  useEffect(() => {
    pullJson();
  }, []);

  return (
    <>
      <div className="container ">
        <AppBody product={product} />
      </div>
    </>
  );
}
