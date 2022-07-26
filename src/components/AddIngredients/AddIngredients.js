import { useState } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.js";

export default function AddIngredients(props) {
  const [ingredient, setIngredient] = useState(0);

  return (
    <>
      {props.type === "number" && (
        <QuantitySelector
          name={props.description}
          onAdd={() => setIngredient(ingredient + 1)}
          onRemove={() => setIngredient(ingredient - 1)}
          value={ingredient}
          amount={props.price}
        />
      )}
    </>
  );
}
