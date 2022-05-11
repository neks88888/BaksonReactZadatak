import React, { useState, useEffect } from "react";
import "./App.css";
import { TicketsContext } from "./context/TicketsContext";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Grid from "./pages/Grid";
import List from "./pages/List";
import Ticket from "./components/Ticket";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Stpage from "./pages/Stpage";

function App() {
  const [allTickets, setAllTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://picsum.photos/v2/list?page=1&limit=12")
        .then((res) => res.json())
        .then((res) => setAllTickets(res));
    };

    fetchData();
  }, []);
  const searchAlgorithm = (itemToFilter, searchTerm, Component, wb) => {
    return itemToFilter
      .filter(
        (ticket) =>
          ticket.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ticket.width
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          ticket.height.toString().includes(searchTerm.toLowerCase())
      )
      .map((ticket) => (
        <Component withBuyLink={wb} key={ticket.id} data={ticket} />
      ));
  };
  const [pageNumber, setPageNumber] = useState(0);

  const ticketsPerPage = 5;
  const pagesVisited = pageNumber * ticketsPerPage;
  const pageCount = Math.ceil(allTickets.length / ticketsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log(allTickets);
  return (
    <Router>
      <TicketsContext.Provider
        value={{
          allTickets,
          searchTerm,
          setSearchTerm,
          searchAlgorithm,
          pageNumber,
          setPageNumber,
          ticketsPerPage,
          pagesVisited,
          pageCount,
          changePage,
        }}
      >
        <SearchBar />
        <nav>
          <Link to="/">Grid</Link>
          <Link to="/list">List</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/list" element={<List />} />
          <Route path="/singleticket/:id" element={<Stpage />} />
        </Routes>
        <Footer />
      </TicketsContext.Provider>
    </Router>
  );
}

export default App;
