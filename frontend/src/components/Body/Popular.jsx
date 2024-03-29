import PopularProducts_Data from "../../Assets/PopularData";
import "./Popular.css";

function PopularProducts() {
  return (
    <div className="popular">
      <h1>Popular Today</h1>
      <hr />
      <div className="popularItems">
        {PopularProducts_Data.map((items, i) => {
          return (
            <Items
              key={i}
              id={items.id}
              name={items.name}
              image={items.image}
              newPrice={items.newPrice}
              oldPrice={items.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

function Items(props) {
  return (
    <div className="item">
      <div className="itemdec">
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <img id="popularID" src={props.image} alt=""></img>
        <p>{props.name}</p>
        <div className="itemprices">
          <div className="itemprices-new">${props.newPrice}</div>
          <div className="itemprices-old">${props.oldPrice}</div>
        </div>
      </div>
    </div>
  );
}
export default PopularProducts;
