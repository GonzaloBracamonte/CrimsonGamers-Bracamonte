import { Link } from "react-router-dom";

const Card = ({ id, title, price, description, image }) => {
  return (
    <div className="card">
      <Link to={`item/${id}`}>
        <img alt={`product ${title}`} src={image} />
        <div className="descriptionContainer">
          <h4>{title}</h4>
          <p>{`# ${id}`}</p>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
