"use client";
import { useContext, useState } from "react";
import { StateContext, ValueContext } from "./MyContext";
import { ReserveSpot } from "@/app/ticketData";
import "../styles/CheckoutOptions.css";

function CheckoutOptions({ setToggleCheckout }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three;
  const [resID, setResID] = useState("");

  function handleAddToBasket() {
    dispatch((old) => ({
      ...old,
      pushed: true,
    }));
  }

  async function reserve() {
    const a = await ReserveSpot(state.campingArea, totalTentSpots);
    console.log(a);
    setResID(a.id);
    console.log("halløj", resID);
  }

  return (
    <div className="flow-btns">
      <button onClick={handleAddToBasket}>ADD TO BASKET</button>

      <button onClick={reserve}>BUY NOW</button>
    </div>
  );
}

export default CheckoutOptions;
