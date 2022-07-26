import style from "./Nav.module.css";

import logoImg from "../../Assets/Deliverize.png";
import { FaUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className="header-logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <div className={style.headerBag}>
          <div className={style.headerContent}>
            <label className={style.contentLabelDelivery} htmlFor="">
              Entrega:
            </label>
            <select className={style.contentSelectDelivery}>
              <option value="address">R. Antonio Bueno, 222</option>
            </select>
          </div>

          <input
            className={style.inputSearch}
            type="text"
            placeholder="Busque por estabelecimentos ou produtos"
          />

          <button className={style.icons}>
            <FaUserCircle size={25} color={"#ED3237"} />
            <span>Entrar</span>
          </button>

          <button className={style.icons}>
            <div className={style.number}>2</div>
            <BsCart3 size={25} color={"#ED3237"} />
            <span>Carrinho</span>
          </button>
        </div>
      </div>
    </header>
  );
}
