"use client";
import { useContext } from "react";
import { ValueContext, StateContext } from "./MyContext";
function ChooseTicket({ updateTickets, tickets, showError }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);

  function reduceTickets() {
    dispatch((old) => {
      const copy = { ...old };
      copy.tickets -= 1;
      return copy;
    });
  }
  function increaseTickets() {
    dispatch((old) => {
      const copy = { ...old };
      copy.tickets += 1;
      return copy;
    });
  }
  return (
    <div className={`choose-wrapper tick ${showError ? "showError" : ""}`}>
      <h2>CHOOSE YOUR TICKETS</h2>
      <div className="counter-line">
        <h3>ALL WEEK TICKET</h3>
        <div className="counter">
          <button onClick={reduceTickets}>-</button>
          <p>{state.tickets}</p>
          <button onClick={increaseTickets}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTicket;
