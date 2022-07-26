import ProductDescription from "../ProductDescription/ProductDescription";

import Ingredients from "../Ingredients/Ingredients.js";
import { FooterIngredients } from "../FooterIngredients/FooterIngredients";

export default function AppBody(props) {
  return (
    <>
      {props.product ? (
        <>
          <ProductDescription product={props.product} />

          <Ingredients product={props.product} />
        </>
      ) : (
        <h1>CARREGANDO...</h1>
      )}
    </>
  );
}
