import React from "react";
import { Button, Modal } from "react-bootstrap";

export const ItemDetail = (props: any, item: any) => {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-center text-center">
            <img
              width="50"
              src={"/images/" + props.data.photo}
              className="card-img img-fluid photoExt"
              alt="photo"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "logo192.png";
              }}
            />

            <p className="mt-3">{props.data.description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
