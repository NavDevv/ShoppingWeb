import { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import SelectedProductDisplay from "./selectedproductdisplay";

export default function DisplayProduct() {
  const { Products_Data } = useContext(ShopContext);
  const { id: productID } = useParams;
  const product = Products_Data.find((e) => e.id === Number(productID));

  return (
    <div>
      <SelectedProductDisplay product={product} />
    </div>
  );
}