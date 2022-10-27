import Button from "../buyingButton";
import "./styles/item.css";
import ItemCount from "../itemCount";

const Items = (props) => {
  return (
    <div className="card">
      <div className="descriptionContainer">
        <h3>{`${props.title}`}</h3>
        <img alt={`product ${props.category}`} src={props.image} />
        <h4>{`Price: $${props.price}`}</h4>
        <p>{props.description}</p>
        <Button />
        <ItemCount stock={Math.round(props.price / 100)} initial={0} />
      </div>
    </div>
  );
};

export default Items;
