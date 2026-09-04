import Container from '@/components/Container';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';

function Contact() {
  const [state, handleSubmit] = useForm('meaqknaj');

  return (
    <>
      <Hero
        title1="Tell us about"
        title2="your event."
        bgImage="contact.jpg"
        subtitle="Send the date, venue, expected audience and platforms. You will receive a written production plan and a firm quotation — and if the venue needs a connectivity test first, we will book the survey."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <Section>
        <Container>
          <div className={styles.split}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h3 className={styles.formTitle}>Request a quote</h3>
              <p className={styles.note}>
                Fields marked with an asterisk help us quote accurately the first time.
              </p>

              <div className={styles.two}>
                <div className={styles.field}>
                  <label htmlFor="name">Your name *</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="organisation">Organisation</label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    placeholder="Company, church, NGO"
                  />
                </div>
              </div>

              <div className={styles.two}>
                <div className={styles.field}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@organisation.co.tz"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone / WhatsApp *</label>
                  <input type="tel" id="phone" name="phone" placeholder="+255 ..." required />
                </div>
              </div>

              <div className={styles.two}>
                <div className={styles.field}>
                  <label htmlFor="eventType">Event type *</label>
                  <select id="eventType" name="eventType" required defaultValue="Corporate event / AGM">
                    <option>Corporate event / AGM</option>
                    <option>Conference or forum</option>
                    <option>Church service or conference</option>
                    <option>Product launch</option>
                    <option>Wedding or ceremony</option>
                    <option>Concert or festival</option>
                    <option>Government event</option>
                    <option>Training or masterclass</option>
                    <option>Podcast or studio production</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="date">Event date *</label>
                  <input type="date" id="date" name="date" required />
                </div>
              </div>

              <div className={styles.two}>
                <div className={styles.field}>
                  <label htmlFor="venue">Venue &amp; city *</label>
                  <input type="text" id="venue" name="venue" placeholder="Venue name, city" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="duration">Duration on air</label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    placeholder="e.g. 3 hours, or 2 days"
                  />
                </div>
              </div>

              <div className={styles.two}>
                <div className={styles.field}>
                  <label htmlFor="package">Package of interest</label>
                  <select id="package" name="package" defaultValue="Not sure — advise me">
                    <option>Not sure — advise me</option>
                    <option>Basic</option>
                    <option>Professional</option>
                    <option>Broadcast</option>
                    <option>Custom</option>
                    <option>Monthly retainer / series</option>
                    <option>White-label partner production</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="platforms">Streaming destinations</label>
                  <input
                    type="text"
                    id="platforms"
                    name="platforms"
                    placeholder="YouTube, Facebook, website, private"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Tell us about the event *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Audience size, remote speakers, languages, screens in the room, who else is supplying stage or PA, and anything that worries you about the broadcast."
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button type="submit" size="large" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send the brief'}
              </Button>

              {state.succeeded && (
                <p className={styles.success}>
                  Thank you — your brief has been sent. We will contact you shortly. Meanwhile,
                  call or WhatsApp us directly.
                </p>
              )}
            </form>

            <div className={styles.sidebar}>
              <div className={styles.card}>
                <p className={styles.eyebrow}>Direct</p>
                <h3>Talk to us</h3>
                <ul className={styles.plainList}>
                  <li>
                    Phone / WhatsApp <span>+25571 507 1286</span>
                  </li>
                  <li>
                    Email <span>streamorestudios@gmail.com</span>
                  </li>
                </ul>
              </div>

              <div className={styles.card}>
                <p className={styles.eyebrow}>Before you call</p>
                <h3>Six answers that speed up your quote</h3>
                <ul className={styles.checkList}>
                  <li>Date, start time and expected duration on air</li>
                  <li>Venue, and whether the internet there has been tested</li>
                  <li>Who owns the streaming channel you want to broadcast to</li>
                  <li>Whether any speakers are joining remotely</li>
                  <li>Whether the session is public, private or confidential</li>
                  <li>What you need after the event — replay, clips, report</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={styles.callout}>
            <h2>Urgent event this week?</h2>
            <p>
              Call or WhatsApp rather than emailing. If we cannot crew it properly to our own standard,
              we will say so immediately and point you to someone who can.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;