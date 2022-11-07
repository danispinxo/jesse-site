import * as React from "react";

export default function Resources () {
  return (
    <main>
      <h1>Mental Health Resources</h1>

      <div className="resource-card">
        <h3>Kids Help Phone</h3>
        <p>
          <a href="https://kidshelpphone.ca/">Kids Help Phone</a> is a Canadian and world leader known for their expertise and continuous innovation as Canada's only 24/7 counselling and information service for young people.
          <br/>
          Since 1989, trained & professional counsellors have been listening to kids, often when no one else can or will. "We are always there."
        </p>
      </div>

      <div className="resource-card">
        <h3>Crisis Services Canada</h3>
        <p>
          Available to all Canadians seeking support. Visit <a href="https://talksuicide.ca/">Crisis Services Canada</a> for the distress centres and crisis organizations nearest you.
          <br/>
          If you or someone you know is thinking about suicide, call the Canada Suicide Prevention Service at 1-833-456-4566 (24/7) or text 45645 (4 pm to 12 am ET).
        </p>
      </div>

      <div className="resource-card">
        <h3>Support for Indigenous Communities</h3>
        {/* THIS LINK IS DEAD. */}
        <p>
          Hope For Wellness is available to all Indigenous peoples across Canada who need immediate crisis intervention. Experienced and culturally sensitive help line counsellors can help if you want to talk or are distressed.
          <br/>
          Call 1-855-242-3310 (toll-free) or connect to the online Hope for Wellness chat.
          <br/>
          Additional resources can be found <a href="https://www.camh.ca//-/media/files/community-resource-sheets/aboriginal-resources-pdf.pdf">here</a>.
        </p>
      </div>

      <div className="resource-card">
        <h3>2SLGBTQA+ support services</h3>
        <p>
        <a href="https://www.rainbowhealthontario.ca/">Rainbow Health Ontario</a> (RHO) is a province-wide program of Sherbourne Health that works to promote the health of Ontario's LGBT2SQ communities and improve their access to services. RHO creates resources, provides information and consultation services, delivers education and training, and supports research to develop evidence-based practice and informed public policy.
        <br/>
        <a href="https://www.the519.org/">The 519</a> provides a range of services from counselling and queer parenting resources to coming out groups, trans programming, and seniors' support. They also provide free, accommodating and non-judgemental space where individuals, organizations and non-profit groups can meet, organize and work towards their goals.
        <br/>
        Additional resources can be found <a href="https://rocketmanapp.com/blog/19-organizations-supporting-the-lgbtq-community-in-ontario/">here</a>.
        </p>
      </div>

      <div className="resource-card">
        <h3>Victim services</h3>
        <p>
        <a href="https://trccmwar.ca/">Toronto Rape Crisis Centre/Multicultural Women Against Rape</a> is a grassroots, women-run collective working towards a violence-free world by providing anti-oppressive, feminist peer support to survivors of sexual violence.
        <br/>
        Their 24 hour hotline is 416-597-8808 or you can email a counselor at crisis@trccmwar.ca.
        </p>
      </div>

      <div className="resource-card">
        <h3>Assistance for families, refugees, and women fleeing violence</h3>
        <p>
          The <a href="https://www.reddoorshelter.ca/">Red Door Family Shelter</a> provides emergency shelter and support for women and children affected by domestic abuse, families experiencing a housing crisis, and refugee claimants with nowhere else to turn.
          <br/>
          If you or a family you know requires shelter call Central Family Intake at 416-397-5637.
          <br/>
          If you are a woman seeking shelter from situations of violence or intimate partner violence call their Crisis Line at 416-423-0310 (press '0'), or the Assaulted Women's Helpline at 1-866-863-0511.
        </p>
      </div>

    </main>
  )
}