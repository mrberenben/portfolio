import { Fragment } from 'react';
import css from './Contact.module.css';

// components
import Banner from '../components/global/Banner';

// layout
import Container from '../layout/Container';
import Section from '../layout/Section';

export default function Contact() {
  return (
    <Fragment>
      <Banner title="Contact" />

      <Container>
        <Section title="Get in touch">
          <div className={css.createComment}>
            <div className={css.formRow}>
              <label htmlFor="fullName" className={css.formLabel}>Full Name</label>
              <input id="fullName" type="text" className={css.formInput} minLength={3} required />
            </div>
            <div className={css.formRow}>
              <label htmlFor="subject" className={css.formLabel}>Subject</label>
              <select id="subject" className={css.formInput} required>
                <option>General</option>
                <option>Work</option>
                <option>Question</option>
              </select>
            </div>
            <div className={css.formRow}>
              <label htmlFor="message" className={css.formLabel}>Your Message</label>
              <textarea id="message" className={css.formTextArea} required></textarea>
            </div>

            <button 
              type="submit"
              className="button button-primary"
            >Send</button>
          </div>
        </Section>
      </Container>
    </Fragment>
  )
}
