import Link from "next/link";
import Button from "./Button";

import "../styles/CheckoutOptions.css";

function CheckoutOptions() {
  return (
    <div className="flow-btns">
      <Button btntext="ADD TO BASKET" href={"/"}></Button>
      <Button
        btntext="BUY NOW"
        href={"/TicketFlow"}
        // onClick={() => reserveSpot("Svartheim", 12)}
      ></Button>
    </div>
  );
}

export default CheckoutOptions;
