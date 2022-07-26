import AddIngredients from "../AddIngredients/AddIngredients.js";
import TitleIngredients from "../TitleIngredients/TitleIngredients.js";
import React, { Fragment } from "react";
import "./Ingredients.css";
import { FooterIngredients } from "../FooterIngredients/FooterIngredients.js";

export default function Ingredients(props) {
  return (
    <div className="containerIngredients">
      {props.product.ingredients.map((group) => (
        <Fragment key={group.group}>
          <TitleIngredients
            title={group.group}
            key={group.group}
            subtitle={`Até ${group.max_itens} ingredientes`}
            type={group.type}
          />
          {/* //!-------------------------------- */}
          <div className="addIngredients">
            {group.itens.map((opt) => (
              <Fragment key={opt.id}>
                <AddIngredients
                  description={opt.nm_item}
                  price={opt.vl_item}
                  type={group.type}
                />
               
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}

      <FooterIngredients />
    </div>
  );
}
