"use client";

import { useState } from "react";
import "../styles/contact.scss";

export default function Modal() {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  if (!open) return null;

  return (
    <div className="submit-modal-backdrop" onClick={handleClose}>
      <div className="submit-modal-box" onClick={(e) => e.stopPropagation()}>
        <p className="submit-modal-title">Form Submitted Successfully!</p>
        <p className="submit-modal-subtitle">Thank you for reaching out.</p>
        <p className="submit-modal-content">
          I will get back to you as soon as I can. You can expect a response
          from me within 24 - 48 hours.
        </p>
        <p className="submit-modal-content">
          * Be sure to check your spam folder for a response.
        </p>
        <div className="btn-holder">
          <button className="close-btn" onClick={handleClose}>
            Thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
