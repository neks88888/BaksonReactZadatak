import React, { useContext, useState } from "react";
import { TicketsContext } from "../context/TicketsContext";
import SingleTicket from "../components/SingleTicket";
import ReactPaginate from "react-paginate";

const Grid = () => {
  // const [users, setUsers] = useState(JsonData.slice(0, 50));

  const {
    allTickets,
    searchTerm,
    searchAlgorithm,
    pageNumber,
    setPageNumber,
    ticketsPerPage,
    pagesVisited,
    pageCount,
    changePage,
  } = useContext(TicketsContext);

  const at = searchAlgorithm(allTickets, searchTerm, SingleTicket, false).slice(
    pagesVisited,
    pagesVisited + ticketsPerPage
  );

  return (
    <React.Fragment>
      {at}
      <ReactPaginate
        style={{ cursor: "pointer" }}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      ;
    </React.Fragment>
  );
};

export default Grid;
