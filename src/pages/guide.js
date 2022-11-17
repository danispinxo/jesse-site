import * as React from 'react'
import './styles.scss'
import './about-and-services.scss'

export default function Guide () {
  return (
    <main className='page-content'>
      <div className="guide-title-holder">
        <h1 className="guide-title">Finding Your Therapist</h1>
      </div>

      <div className="guide-intro">
        <div className="intro-title">A 4-Step Guide to Finding the Right Therapist for You</div>
        <p>
          If you search “therapist Toronto” the Internet will give you millions of search results. Literally. Finding the right therapist can feel hopeless and exhausting. And if you&apos;re googling therapist, you&apos;re probably already under some stress. Don&apos;t despair! Streamline your search by working through the FOUR following steps:
        </p>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">STEP ONE: </p> <p className='label-subtitle'>Decide on Your Needs</p>
        </div>

        <div className="section-content">
          <p>Decide what kind of mental health care practitioner you need. Psychiatrist, psychologist, psychotherapist—are you confused about the differences? You&apos;re definitely not alone, but the key distinctions are worth knowing and could make all the difference in your search.
          </p>
    
          <p className="subtitle">1. A psychiatrist is a medical doctor.</p>
          <ul>
            <li>they can prescribe drugs (i.e., anti-depressant, anti-anxiety, or anti-psychotic medication)</li>
            <li>they can diagnose psychiatric illnesses (i.e., depression, bi-polar disorder, ADHD, etc.)</li>
            <li>their services are covered by OHIP</li>
            <li>they sometimes offer counselling</li>
            <li>you typically need a medical referral to see a psychiatrist and the wait time can be significant (i.e., several months). It may be particularly difficult to get an appointment without indication of an underlying medical/psychiatric condition.</li>
          </ul>

          <p className="subtitle">2. A psychologist or psychological associate has a Ph.D. or M.A. in psychology</p>

          <ul>
            <li>they cannot prescribe medication</li>
            <li>they are trained in research methodologies and can administer psychological tests, assessments or diagnoses for some neurological or mental-health related issues (i.e., anxiety)</li>
            <li>psychologist services may be covered by your insurance provider, depending on your coverage</li>
            <li>their training may include counselling skills</li>
            <li>you may need a referral to see some psychologists</li>
          </ul>

          <p className="subtitle">3. A psychotherapist has a post-graduate degree or equivalent training in psychotherapy</p>

          <ul>
            <li>they cannot prescribe medication*</li>
            <li>they cannot diagnose mental health conditions*</li>
            <li>your insurance may cover psychotherapist services—check to see whether your coverage includes the designation Registered Psychotherapist or RP</li>
            <li>their training includes counselling skills and clinical practice</li>
            <li>you do not need a referral to see a psychotherapist</li>
            <li>psychotherapists are regulated by the College of Registered Psychotherapists of Ontario (the CRPO), which holds them to educational, professional, and ethical standards</li>
          </ul>

          <p className="subtitle">4. There are other options too</p>
          <ul>
            <li>
              Counsellors, coaches, social workers or therapists who work in spaces other than psychotherapy. And there are pastoral or spiritual guides who offer counselling services. Some of these areas are regulated (i.e., social work) and others are not (i.e., coaching). There are excellent practitioners in every field so it&apos;s really about doing your homework and deciding which kind counsellor best suits your individual needs.
            </li>
            <li>
              Although psychotherapists cannot prescribe medication or diagnose mental health conditions, we often work with clients who are taking psychotropic medication and/or who have diagnoses (i.e., for depression, anxiety, PTSD, eating disorders, etc.). Psychotherapists often play a role in an integrated approach to managing formally diagnosed conditions.
            </li>
          </ul>
          <p>
            So, if you&apos;re still with me AND you think psychotherapy could be right for you then proceed to Step TWO. Otherwise, consult with your family physician for a referral to a psychiatrist or psychologist, or conduct your own research into other areas.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">STEP TWO:</p>
          <p className='label-subtitle'>Refine Your Search</p>
        </div>
        <div className="section-content">
          <p>
          You want to see a psychotherapist. Refine your search by asking yourself the following questions. If you search the Psychology Today directory for therapists in Toronto you&apos;re still going to come up with 50+ pages of entries. And some of those ads will contain technical information you might find confusing and off-putting. Here&apos;s how to wade through all that psycho-babble to find your match.
          </p>
          <ol>
            <li>
              Identify your main problem or issue - Why are you coming to therapy? Are you struggling with a career issue, are you feeling anxious, is your marriage on the rocks, are you mourning a loss, are you fighting an addiction? Look for a practitioner who has experience and interest in working with your specific issue. Most therapists do list their areas of experience or interest on their web sites and many directories let you search by issue.
            </li>
            <li>
              Decide whether you have a preferred treatment approach - This is where people often start to feel bogged down—psychodynamic, relational, transpersonal, CBT, EFT, EMDR? What does it all mean? Does this even matter? Your therapist&apos;s approach is important because it speaks to how they will help you bring about change. It reflects the framework they will use to read and understand your history and your experiences, and the tools they&apos;ll call on to help you cultivate your own awareness, understanding, and ultimately, transformation.
              <br />
              It&apos;s not a bad idea to conduct a little research at this stage and there are lots of resources available on the Internet (i.e., this directory from Good Therapy), but it is a bad idea to get stuck here or hung up on jargon. Once you come up with your short list of candidates, it&apos;s perfectly legitimate to ask her to explain her approach in lay-terms.
            </li>
            <li>
              Ask yourself which practical considerations are important to you - These factors often determine whether or not you actually make it to therapy. And therapy won&apos;t work if you don&apos;t go. Do give these considerations just weight.
              <ul>
                <li><span>Cost</span>: How much will sessions cost, do you have insurance coverage, etc.</li>
                <li><span>Location</span>: Is it convenient for you to get to the office?</li>
                <li><span>Availability</span>: Does the therapist have office hours that work for you (evenings, weekends)? Do they offer e-therapy, if this is an alternate route for you?</li>
                <li><span>Qualifications</span>: Is it important to you that your therapist have any particular qualifications, training, knowledge, or experience?</li>
                <li><span>Other considerations</span>: Sex/gender, age, race/ethnicity, religious faith, sexual orientation. It may be important for you to feel that your therapist can relate to a particular domain of experience. If this is the case, be honest with yourself. For example, a woman working through sexual assault trauma may not want to work with a male therapist if her assailant was a man. You need to feel a sense of safety and trust to be open in therapy. Sometimes ostensibly “personal” factors do matter when choosing a therapist.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">STEP THREE: </p>
          <p className='label-subtitle'>Research</p>
        </div>
        <div className="section-content">
          <ol>
            <li>
              Do your research and make a short list of candidates. Now that you&apos;re clear on which criteria you find most important, you can go forth and conduct your search. But where should you look?
              <ul>
                <li><span>Personal References</span>: I know this may be a private matter, but other people are often your best resources. Ask around (i.e., trusted friends and family, your doctor, alternative health care practitioners such as naturopaths or physiotherapists, etc.).</li>
                <li><span>Directories</span>: for example, Psychology Today or the CRPO web site for general inquiries. Or consult specialist directories if you know your desired treatment modality.</li>
                <li><span>Internet searches</span>: I know, I know, it&apos;s a terrible rabbit hole, but if you have a refined or specialized idea of what you&apos;re seeking you can yield good results.</li>
                <li><span>Local advertisements</span>: Keep an eye open for advertisements or flyers in places you frequent or for clinics or practitioners near your home, work, or in neighbourhoods / communities you often visit.</li>
              </ul>
            </li>

            <li>Make a short list of candidates - Who resonates with you? By now you&apos;ve probably read lots of advertisements and web sites. Trust yourself to know who&apos;s making a connection. Aim to find 2-4 therapists you think could be a good fit. Or perhaps you have a strong feeling about one individual based on their web site, a personal reference, etc.?</li>

            <li>Take a brief phone consultation - Either way, it&apos;s time well spent to contact or interview a practitioner before you make your initial appointment. Many therapists offer a short phone consultation free of charge. Those who don&apos;t advertise this fact may still be willing to take a short call. This is your opportunity to ask any questions you might have about the therapist&apos;s qualifications, approach, availability, fees, etc. Sometimes candidates weed themselves out quickly once you get them on the phone. Does the practitioner respond to you in a timely and professional manner? Are they attentive? Do they seem interested in you and your concerns? When you talk, do they make you feel heard? Do your schedules work? Do you get a good vibe?</li>

            <li>Listen. With your stomach - Do you get a good vibe? This is admittedly an unscientific question. But fit is the alchemical x-factor that makes for a strong therapeutic alliance. This collaborative relationship between client and therapist is the most reliable indicator of whether a course of treatment will be successful. Doing your research matters, but when making a final decision you also need to listen to your gut.</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">STEP FOUR: </p>
          <p className='label-subtitle'>Book it!</p>
        </div>
        <div className="section-content">
          <p>
            Your first few meetings will probably feel somewhat exploratory as you and your therapist get to know one another. It takes time to develop rapport, but within 2-3 sessions you should feel that you are building connection and moving forward!
          </p>
        </div>
      </div>
    </main>
  )
}

export { Head } from './index'
