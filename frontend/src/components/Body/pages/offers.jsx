import "../styles/offers.css";
import offersImg from "../images/Offers.png";
function Offers() {
  return (
    <div className="offers">
      <div className="offersleft">
        <h1>Exculisve offers</h1>
        <h1>Ends Soon</h1>
        <p>Only availabe on chosen products</p>
        <button id="offersbtn">Check out →</button>
      </div>
      <div className="offersright">
        <img id="offersID" src={offersImg} alt=""></img>
      </div>
    </div>
  );
}
export default Offers;
