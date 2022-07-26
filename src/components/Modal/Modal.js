import "./Modal.css";

export default function Modal({ name, cutlery, value }) {
  return (
    <div className="modalContainer">
      <div className="modalrHeader">
        <h1 className="modalTitle">Adicionando com Sucesso</h1>
      </div>

      <div className="modal-content">
        <h2 className="modalIngredientes">Oferta Cheddar Bacon</h2>
        <p>Ingredientes:</p>
        <ul className="modalList">
          <li>1 Carne 250gr</li>
          <li>2 Queijo Cheddar</li>
          <li>1 Bacon</li>
          <li>Molho Especial</li>
          {value > 0 && <li>{name}</li>}
        </ul>
        {cutlery > 0 && (
          <p>
            Precisa de talheres: {cutlery}{" "}
            {cutlery === 1 ? "unidade" : "unidades"}{" "}
          </p>
        )}
      </div>
    </div>
  );
}
