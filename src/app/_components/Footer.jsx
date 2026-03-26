import "../styles/footer.scss";
import TherapyOwlVerification from "./TherapyOwlVerification";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">Office Hours</div>

      <div className="office-hours">
        <div className="schedule-line">
          <div className="schedule-dates">Monday - Tuesday</div>
          <div className="schedule-times">10:00am - 7:00pm</div>
        </div>

        <div className="schedule-line">
          <div className="schedule-dates">Wednesday</div>
          <div className="schedule-times">10:00am - 12:00pm</div>
        </div>

        <div className="schedule-line">
          <div className="schedule-dates">Thursday</div>
          <div className="schedule-times">10:00am - 2:30pm</div>
        </div>

        <div className="schedule-line">
          <div className="schedule-dates">Friday</div>
          <div className="schedule-times">5:00pm - 7:00pm</div>
        </div>

        <div className="schedule-line">
          <div className="schedule-dates">Saturday & Sunday</div>
          <div className="schedule-times">Urgent Appointments Only</div>
        </div>
      </div>

      <div className="verification-container">
        <div className="verifications">
          <iframe
            title="Psychology Today Verified -- Jesse Pajuaar"
            src="https://www-jptherapystudios-com.filesusr.com/html/900dd1_259a81179feffed44176301ed25faa6a.html"
          />
          <TherapyOwlVerification />
        </div>
        <h6>&copy; 2026 Jesse Pajuäär Therapy Studios</h6>
      </div>
    </div>
  );
}
