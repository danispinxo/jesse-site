import * as React from 'react'
import '../pages/styles.scss'
import ModalUnstyled from '@mui/material/Modal'

export default function BasicModal () {
  let shown = false

  if (sessionStorage.getItem('shown-modal')) {
    shown = true
  }

  const [open, setOpen] = React.useState(!shown)
  console.log(sessionStorage.getItem('shown-modal'))

  const handleClose = () => {
    if (!sessionStorage.getItem('shown-modal')) {
      sessionStorage.setItem('shown-modal', 'true')
    }
    setOpen(false)
  }

  return (
    <div className="covid-modal">
      <ModalUnstyled
        open={open}
        onClose={handleClose}
      >
        <div className="modal-box">
          <p className="covid-modal-title">Covid-19 Response</p>
          <p className="covid-modal-subtitle">Waitlisting new clients in limited capacity</p>
          <p className="covid-modal-content">
            Please note that as of November 2021 my practice is currently full, and I cannot accommodate additional new clients until 2022.
          </p>
          <p className="covid-modal-content">
            In response to Covid-19 I have shifted my practice online for the forseeable future.
          </p>
          <p className="covid-modal-content">
            I can meet with you via the following teletherapy options: <br /> <br />
            Telephone consultations & sessions<br />
            Video sessions
          </p>
          <div className="btn-holder">
            <button className="close-btn" onClick={handleClose}>Okay</button>
          </div>
        </div>
      </ModalUnstyled>
    </div>
  )
}
