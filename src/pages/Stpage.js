import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";

function Stpage() {
  const { id } = useParams();
  const { allTickets } = useContext(TicketsContext);
  const singleTicket = allTickets.find((ticket) => ticket.id === id);
  console.log(singleTicket);
  return (
    <div>
      {singleTicket && singleTicket.author}
      <h1>Stpage {id}</h1>
    </div>
  );
}

export default Stpage;
