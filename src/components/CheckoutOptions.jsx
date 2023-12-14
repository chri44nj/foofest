"use client";
import { useContext, useState } from "react";
import { StateContext, ValueContext, TimerContext, SetTimerContext, ReserveContext, SetReserveContext } from "./MyContext";
import { ReserveSpot } from "@/app/ticketData";
import "../styles/CheckoutOptions.css";

function CheckoutOptions({ setToggleParticipant }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const timerState = useContext(TimerContext);
  const dispatchTimer = useContext(SetTimerContext);
  const reserveState = useContext(ReserveContext);
  const reserveDispatch = useContext(SetReserveContext);
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three;

  function handleAddToBasket() {
    dispatch((old) => ({
      ...old,
      pushed: true,
    }));

    startTimer();
  }

  function startTimer() {
    dispatchTimer((old) => ({
      ...old,
      time: 320,
      timeRunning: true,
    }));
  }

  async function reserve() {
    const reserveResponse = await ReserveSpot(state.campingArea, totalTentSpots);
    reserveDispatch(reserveResponse);
    console.log("halløj", reserveState);
  }

  return (
    <div className="flow-btns">
      <button
        onClick={() => {
          handleAddToBasket();
          reserve();
        }}
      >
        ADD TO BASKET
      </button>

      <button
        onClick={() => {
          setToggleParticipant();
          handleAddToBasket();
          reserve();
        }}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default CheckoutOptions;
