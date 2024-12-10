import * as React from "react";
import "./styles.scss";
import "./resources.scss";
import CrisisPhoto from "../images/Crisis.webp";
import FamiliesPhoto from "../images/Families.webp";
import IndigenousPhoto from "../images/Indigenous.webp";
import KidsPhoto from "../images/Kids.webp";
import QueerPhoto from "../images/Queer.webp";
import VictimPhoto from "../images/Victim.webp";

export default function Resources() {
  return (
    <main>
      <div className="resources-title-holder">
        <p className="resources-title">Mental Health Resources</p>
      </div>

      <div className="resource-cards">
        <div className="resource-card">
          <img
            className="card-img"
            src={KidsPhoto}
            alt="Children Playing Tug-of-War"
          />
          <p className="card-label">Kids Help Phone</p>
          <p className="card-content">
            <a
              href="https://kidshelpphone.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Kids Help Phone
            </a>{" "}
            is a Canadian and world leader known for their expertise and
            continuous innovation as Canada&apos;s only 24/7 counselling and
            information service for young people.
          </p>
          <p className="card-content">
            Since 1989, trained & professional counsellors have been listening
            to kids, often when no one else can or will. &quot;We are always
            there.&quot;
          </p>
        </div>

        <div className="resource-card">
          <img className="card-img" src={CrisisPhoto} alt="Folded Hands" />
          <p className="card-label">Crisis Services Canada</p>
          <p className="card-content">
            Available to all Canadians seeking support. Visit{" "}
            <a href="https://talksuicide.ca/" target="_blank" rel="noreferrer">
              Crisis Services Canada
            </a>{" "}
            for the distress centres and crisis organizations nearest you.
          </p>
          <p className="card-content">
            If you or someone you know is thinking about suicide, call the
            Canada Suicide Prevention Service at 1-833-456-4566 (24/7) or text
            45645 (4 pm to 12 am ET).
          </p>
        </div>

        <div className="resource-card">
          <img
            className="card-img"
            src={IndigenousPhoto}
            alt="Multicultural Support Group"
          />
          <p className="card-label">Support for Indigenous Communities</p>
          <p className="card-content">
            <a
              href="https://www.hopeforwellness.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Hope For Wellness
            </a>{" "}
            is available to all Indigenous peoples across Canada who need
            immediate crisis intervention. Experienced and culturally sensitive
            help line counsellors can help if you want to talk or are
            distressed.
          </p>
          <p className="card-content">
            Call 1-855-242-3310 (toll-free) or connect to the online Hope for
            Wellness chat.
          </p>
          <p className="card-content">
            Additional resources can be found{" "}
            <a
              href="https://www.camh.ca//-/media/files/community-resource-sheets/aboriginal-resources-pdf.pdf"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="resource-card">
          <img
            className="card-img"
            src={QueerPhoto}
            alt="Pride Parade with Flags"
          />
          <p className="card-label">2SLGBTQA+ Support Services</p>
          <p className="card-content">
            <a
              href="https://www.rainbowhealthontario.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Rainbow Health Ontario
            </a>{" "}
            (RHO) is a province-wide program of Sherbourne Health that works to
            promote the health of Ontario&apos;s LGBT2SQ communities and improve
            their access to services. RHO creates resources, provides
            information and consultation services, delivers education and
            training, and supports research to develop evidence-based practice
            and informed public policy.
          </p>
          <p className="card-content">
            <a href="https://www.the519.org/" target="_blank" rel="noreferrer">
              The 519
            </a>{" "}
            provides a range of services from counselling and queer parenting
            resources to coming out groups, trans programming, and seniors&apos;
            support. They also provide free, accommodating and non-judgemental
            space where individuals, organizations and non-profit groups can
            meet, organize and work towards their goals.
          </p>
          <p className="card-content">
            Additional resources can be found{" "}
            <a
              href="https://rocketmanapp.com/blog/19-organizations-supporting-the-lgbtq-community-in-ontario/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="resource-card">
          <img
            className="card-img"
            src={VictimPhoto}
            alt="Two People Holding Hands"
          />
          <p className="card-label">Victim Services</p>
          <p className="card-content">
            <a href="https://trccmwar.ca/" target="_blank" rel="noreferrer">
              Toronto Rape Crisis Centre/Multicultural Women Against Rape
            </a>{" "}
            is a grassroots, women-run collective working towards a
            violence-free world by providing anti-oppressive, feminist peer
            support to survivors of sexual violence.
          </p>
          <p className="card-content">
            Their 24 hour hotline is 416-597-8808 or you can email a counselor
            at crisis@trccmwar.ca.
          </p>
        </div>

        <div className="resource-card">
          <img
            className="card-img"
            src={FamiliesPhoto}
            alt="Woman and Child Holding Hands at Sunset"
          />
          <p className="card-label">
            Assistance for Families, Refugees, and Women Fleeing Violence
          </p>
          <p className="card-content">
            The{" "}
            <a
              href="https://www.reddoorshelter.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Red Door Family Shelter
            </a>{" "}
            provides emergency shelter and support for women and children
            affected by domestic abuse, families experiencing a housing crisis,
            and refugee claimants with nowhere else to turn.
          </p>
          <p className="card-content">
            If you or a family you know requires shelter call Central Family
            Intake at 416-397-5637.
          </p>
          <p className="card-content">
            If you are a woman seeking shelter from situations of violence or
            intimate partner violence call their Crisis Line at 416-423-0310
            (press &lsquo;0&lsquo;), or the Assaulted Women&qpos;s Helpline at
            1-866-863-0511.
          </p>
        </div>
      </div>
    </main>
  );
}

export { Head } from "./index";
