import React, { useState } from "react";
import { ItemDetail } from "./ItemDetail";


export const Item = (item: any) => {
    
    const [modalShow, setModalShow] = useState(false);


  return (
    <>
      <div className="row no-gutters justify-content-center mt-2">
        <div className="card col-10">
            <div className="row p-3">
              <div className="col-md-2">
                <img src={ ('/images/' + item.photo) } className="card-img img-fluid photo" alt="photo" 
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src="logo192.png";
                }} />

              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title"><a className="customTittle" onClick={() => setModalShow(true)}>{item.title}</a></h5>
                  <p className="card-text">{item.shortDescription}</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <ItemDetail show={modalShow} onHide={() => setModalShow(false)} keyboard={false} backdrop='static' data={item} />

    </>
  );
};
