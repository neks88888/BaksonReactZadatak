import React from "react";
import logo from "../image/image.jfif";
import { Link } from "react-router-dom";

function SingleTicket(props) {
  const {
    data: { url, author, id },
    withBuyLink = false,
  } = props;
  console.log(url);
  return (
    <div className="image">
      <img className="image" src={logo} alt="Hanz Zimmer Logo" />
      <span>{author}</span>
      {withBuyLink && <Link to={`/singleticket/${id}`}>BUY TICKETS</Link>}
    </div>
  );
}

export default SingleTicket;
