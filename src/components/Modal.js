import * as React from 'react'
import '../pages/styles.scss'
import ModalUnstyled from '@mui/material/Modal'

export default function BasicModal () {
  const [open, setOpen] = React.useState(true)
  const handleClose = () => {
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
            Please note that as of November 2022, I am currently taking on new clients in a very limited capacity. Please contact me using the contact form for more information.
          </p>
          <p className="covid-modal-content">
            In response to Covid-19 I have shifted my practice online for the forseeable future.
          </p>
          <p className="covid-modal-content">
            I am able to meet with you via the following teletherapy options: <br /> <br />
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
