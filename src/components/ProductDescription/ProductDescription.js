import "./ProductDescriptio.css";
import hamburguerImg from "../../Assets/hamburguer.png";

export default function ProductDescription(props) {
  return (
    <main className="mainShowcase">
      <>
        <div className="showCaseImg">
          {/* <img
            src={props.product?.url_image}
            alt=""
          /> */}
          <img className="mainShowcaseImg" src={hamburguerImg} alt="" />
        </div>
        <h1 className="mainShowcaseTitle">{props.product.nm_product}</h1>

        <p>{props.product.description}</p>

        <span className="containerShocaseAmount">
          R${props.product.vl_discount}
        </span>

        <span className="containerShocaseAmount --sale">
          <del>{props.product.vl_price}</del>
        </span>
      </>
    </main>
  );
}
