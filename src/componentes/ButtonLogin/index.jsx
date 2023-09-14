import React from "react";
import { Link as LinkSign } from "react-router-dom"
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Style from "./Style.css"




export default function buttonLogin() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>MyTinerary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Sign in to access the best of MyTinerary</h5>
          <div className="buttons">
            <LinkSign type="button" className="btn btn-info" to="/SignIn" onClick={handleCloseModal}>
              <p className="text-buttons-modal">If you already have an account, Log in</p>
            </LinkSign>
            <button type="button" className="btn btn-info">
              <p className="text-buttons-modal">Sign up with Google</p>
            </button>
            <LinkSign type="button" className="btn btn-info" to="/SignUp" onClick={handleCloseModal}>
              <p className="text-buttons-modal">Sign up with your email</p>
            </LinkSign>
          </div>
          <div>
            <p className="text-buttons-modal">
              By continuing, you confirm your agreement with our Terms of Use
              and confirm that you have read our Statement Privacy and Cookies.
              This site is protected by reCAPTCHA and the Privacy Policy and the
              Google Terms of Service.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
