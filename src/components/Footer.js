import * as React from 'react'
import '../pages/styles.scss'

export default function Footer () {
  return (
    <div className="footer">

      <div className="footer-title">
        Office Hours
      </div>

      <div className="office-hours">
        
        <div className="schedule-line">
          <div className="schedule-dates">
            Monday - Thursday
          </div>
          <div className="schedule-times">
            10:00am - 6:00pm
          </div>
        </div>

        <div className="schedule-line">
          <div className="schedule-dates">
            Friday
          </div>
          <div className="schedule-times">
            10:00am - 2:00pm
          </div>
        </div>

        <div className="schedule-line">
          <div className="schedule-dates">
            Saturday & Sunday
          </div>
          <div className="schedule-times">
            No Office Hours
          </div>
        </div>
      </div>
      
      <div className="psychology-today-verification">
        <iframe title="Psychology Today Verified -- Jesse Pajuaar" src="https://www-jptherapystudios-com.filesusr.com/html/900dd1_259a81179feffed44176301ed25faa6a.html" />
        <p>
          &copy; 2022, Jesse Pajuäär Therapy Studios
        </p>
      </div>
    </div>
  )
}
