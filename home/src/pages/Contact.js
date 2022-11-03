import * as React from "react";

export default function Contact () {
  return (
    <main>
      <h1>Get In Touch</h1>
      <h4>Note: My practice has been moved online for the foreseeable future. Consequent therapy sessions will be limited to secure video or telephone sessions.</h4>

      <div className="contact-info">
        <p>The right fit is the most important part of finding the right therapist.</p>

        <a href="https://www.jptherapystudios.com/4-stepguide">See more on how to choose the right therapist for you</a>

        <p>To contact me for a no-fee 15 minute phone consultation simply fill out the form to the right.</p>
      </div>

      <div className="contact-form">
        <form className="contact-form">
        
          <div className="first-name-form">
            <label for="first-name-id" >First Name</label>
            <input name="first-name" id="first-name-id" type="text" placeholder="" required="true" aria-required="true" maxlength="20" value="" />
          </div>

          <div className="last-name-form">
            <label for="last-name-id" class="aHD7c">Last Name</label>
            <input name="last-name" id="last-name-id" type="text" placeholder="" required="true" aria-required="true" maxlength="35" value="" />
          </div>

          <div className="email-form">
            <label for="input_comp-krwcnczw" class="aHD7c">Email address</label>
            <input name="email" id="input_comp-krwcnczw" class="_1SOvY has-custom-focus" type="email" placeholder="" required="" aria-required="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxlength="250" value="" />
          </div>
          
          <div className="phone-form">
            <label for="input_comp-krwcnczz" class="aHD7c">Phone</label>
            <input name="phone" id="input_comp-krwcnczz" class="_1SOvY has-custom-focus" type="tel" placeholder="" required="" aria-required="true" maxlength="12" minlength="12" value=""/>
          </div>

          <div id="comp-ktee8ho7" class="_2dBhC _2nVk2 _65cjg">
            <label for="input_comp-ktee8ho7" class="aHD7c">Location</label>
            <input name="location" id="input_comp-ktee8ho7" class="_1SOvY has-custom-focus" type="text" placeholder="e.g., Toronto, ON" required="" aria-required="true" maxlength="250" value="" />
          </div>

          <div id="comp-ktee9f04" class="cyPU8 o5QNg _3hYUI _3I1te">
            <label class="_2z549" for="collection_comp-ktee9f04">How did you hear about JPTS?</label>
            <select class="Ch2LG has-custom-focus _1UP8Q" id="collection_comp-ktee9f04" required="" aria-required="true">
              <option value="" disabled="" class="Vx877 _3pa83">Choose an option</option>
              <option value="Recommendation" class="Vx877" aria-selected="false">Recommendation</option>
              <option value="Psychology Today" class="Vx877" aria-selected="false">Psychology Today</option>
              <option value="Affordable Therapy" class="Vx877" aria-selected="false">Affordable Therapy</option>
              <option value="CRPO directory" class="Vx877" aria-selected="false">CRPO directory</option>
              <option value="CATA directory" class="Vx877" aria-selected="false">CATA directory</option>
              <option value="Google search" class="Vx877" aria-selected="false">Google search</option>
              <option value="Other" class="Vx877" aria-selected="false">Other</option>
            </select>
          </div>
            
          <div id="comp-krwcnd03" class="_2dBhC _2nVk2 _65cjg">
            <label for="input_comp-krwcnd03" class="aHD7c">Message</label>
            <input name="message" id="input_comp-krwcnd03" class="_1SOvY has-custom-focus" type="text" placeholder="What's been troubling you?" required="" aria-required="true" maxlength="100" value="" />
          </div>
            
          <div id="comp-krwcnd06" class="Captcha3940957316__root Captcha3940957316--loaded Captcha3940957316--isMobileFriendly">
            <div class="Captcha3940957316__captcha">
              <div style="width: 304px; height: 78px;">
                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/enterprise/anchor?ar=2&amp;k=6Ld0J8IcAAAAANyrnxzrRlX1xrrdXsOmsepUYosy&amp;co=aHR0cHM6Ly93d3cuanB0aGVyYXB5c3R1ZGlvcy5jb206NDQz&amp;hl=en&amp;v=NJPGLzpIZgjszqyOymHUP0XR&amp;theme=light&amp;size=normal&amp;cb=l8msd46c2wj9" width="304" height="78" role="presentation" name="a-5yhs3x3pm6df" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                <textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;">
                </textarea>
              </div>
              <iframe style="display: none;"></iframe>
            </div>
            <input class="Captcha3940957316__checkbox" type="checkbox" required="" tabindex="-1" aria-hidden="true"/>
          </div>
            
          <div class="_1WP0F">
            <iframe class="_3Xz9Z" title="Embedded Content" name="htmlComp-iframe" width="100%" height="100%" allow="fullscreen" data-src="" src="https://www-jptherapystudios-com.filesusr.com/html/900dd1_259a81179feffed44176301ed25faa6a.html">
            </iframe>
          </div>
          
          <div class="_2UgQw" id="comp-krwcnd09" aria-disabled="false">
            <button aria-disabled="false" data-testid="buttonElement" class="_1fbEI">
              <span class="_1Qjd7">Send</span>
            </button>
          </div>
          
          <div id="comp-kw2hdmfh" class="_1Q9if _3bcaz" data-testid="richTextElement">
            <p class="font_8" style="text-align:center; font-size:18px;"><span style="font-family:futura-lt-w01-book,sans-serif;"><span style="color:#05C8A1;">Thanks for submitting! Be sure to sheck your SPAM folder for a response.</span></span></p>
          </div>
        </form>
      </div>
    </main>
  )
}