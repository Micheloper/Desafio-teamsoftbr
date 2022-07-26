import "./QuantitySelector.css";
import { MdAdd, MdRemove } from "react-icons/md";

export default function QuantitySelector({
  name,
  amount,
  onAdd,
  onRemove,
  value,
}) {
  return (
    <div className="ingredientGroup">
      <label className="ingredientName">{name}</label>
      <div className="ingredientGroupAmount">
        <div>
          {/* //!-------------------------------------- */}
          <button
            disabled={value === 0 ? true : false}
            onClick={onRemove}
            className="ingredientButton --decrease"
          >
            <MdRemove color={value === 0 ? "#AEB6C1" : "#D80000"} size={24} />
          </button>
          {/* //!-------------------------------------- */}
          <p>{value}</p>
          {/* //!-------------------------------------- */}
          <button
            disabled={value === 3 ? true : false}
            onClick={onAdd}
            className="ingredientButton --add"
          >
            <MdAdd size={24} />
          </button>
          {/* //!-------------------------------------- */}
        </div>
      </div>
      <span>
        <input type="text" value={"+ R$" + "" + amount} disabled />
      </span>
      {/* <input type="text" value={amount} disabled /> */}
    </div>
  );
}
