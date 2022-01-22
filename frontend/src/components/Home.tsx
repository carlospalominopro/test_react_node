import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SearchService from "../services/SearchService";
import { Item } from "./Item";

export const Home = () => {
  const [items, setItems] = useState<Array<any>>([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    retrieveItems();
  }, []);

  const retrieveItems = () => {
    SearchService.getAllItems({ searchParam: query })
      .then((response: any) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuery(query);
    retrieveItems();
  };

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      retrieveItems();
    }
  };

  return (
    <>
      <div className="col-12 text-center pt-5 pb-2">
        <h3>Search Engine </h3>
      </div>

      <div className="row d-flex justify-content-center align-items-center animate__animated animate__fadeIn">
        <div className="col-11">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Please enter your search by title"
                value={query}
                onChange={handleChange}
                onKeyPress={handleEnter}
              />

              <button type="submit" className="btn btn-custom">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="movies-library">
        {items.length ? (
          items.map((item) => {
            return <Item key={item.id} {...item} />;
          })
        ) : (
          <p className="text-center">Search not found</p>
        )}
      </div>

      <footer className="footer footerMod">
        <div className="container text-center">
          <span className="text-muted">
            COPYRIGHT - BY CARLOS PALOMINO - VERTRICAL CODING CHALLENGE
          </span>
        </div>
      </footer>
    </>
  );
};
