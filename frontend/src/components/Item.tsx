import React, { useState } from "react";
import { ItemDetail } from "./ItemDetail";

export const Item = (item: any) => {
  const [modalShow, setModalShow] = useState(false);

  const random = (1 + Math.random() * (100 - 1)).toFixed(0);

  return (
    <>
      <div className="card animate__animated animate__fadeInUp">
        <a href="#">
          <img
            onClick={() => setModalShow(true)}
            src={"/images/" + item.photo}
            width="150px"
            height="200px"
            alt="cover"
            className="cover"
          />
        </a>

        <div className="hero">
          <div className="details">
            <div className="title1" onClick={() => setModalShow(true)}>
              {item.title}
            </div>

            <fieldset className="rating">
              <div className="Stars"> </div>
            </fieldset>

          </div>
        </div>

        <div className="description">
          <div className="column2">
            <p>
              {item.shortDescription}
              <ItemDetail
                show={modalShow}
                onHide={() => setModalShow(false)}
                keyboard={false}
                backdrop="static"
                data={item}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
