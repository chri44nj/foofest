"use client";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import ParticipantInfo from "./ParticipantInfo";
import "@/styles/Participants.css";
import { StateContext, ValueContext } from "./MyContext";
export default function Participants({ setToggleCheckout }) {
  const [submitData, setSubmitData] = useState([]);
  const { register, handleSubmit } = useForm();
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const onSubmit = (data) => {
    console.log(data);
    setSubmitData((prevData) => [
      ...prevData,
      {
        participant: prevData.length + 1,
        data,
      },
    ]);
    console.log("her er data i state", submitData);
  };
  function handleCheckoutFlow() {
    dispatch((old) => ({
      ...old,
      checkoutPush: true,
    }));
  }
  return (
    <div>
      <div className="right">
        <h2 className="ticketformh2">Info on participants</h2>

        {[...Array(state.regular)].map((_, index) => (
          <div key={index}>
            <h3 className="participanth3">Participant {index + 1}</h3>
            <form>
              <ParticipantInfo register={register} prefix={`participant${index + 1}`} />
            </form>
          </div>
        ))}
        {[...Array(state.vip)].map((_, index) => (
          <div key={index}>
            <h3 className="participanth3">VIP Participant {index + 1}</h3>
            <form>
              <ParticipantInfo register={register} prefix={`participant${index + 1}`} />
            </form>
          </div>
        ))}
        <div className="btngrid">
          <input
            className="submitBtn"
            type="submit"
            onClick={() => {
              handleSubmit(onSubmit);
              handleCheckoutFlow();
              setToggleCheckout();
            }}
          />
        </div>
      </div>
    </div>
  );
}
