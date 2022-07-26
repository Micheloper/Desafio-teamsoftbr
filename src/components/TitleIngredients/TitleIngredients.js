import "./TitleIngredients.css";

export default function TitleIngredients(props) {
  return (
    <div className="titleHeader">
      {props.type === "number" ? (
        <>
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </>
      ) : (
        <>
          <h2>{props.title}</h2>
        </>
      )}
    </div>
  );
}
