import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import css from './AboutMe.module.css';

// components
import Banner from '../components/global/Banner';

// layout
import Section from '../layout/Section';
import Container from '../layout/Container';

export default function AboutMe() {
  return (
    <Fragment>
      <Banner title="About Me" />

      <Container>
        <Section title="About me">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in molestie ipsum. Sed pellentesque iaculis lectus, ac porttitor lectus eleifend eget. Nullam id iaculis leo, eu porttitor dolor. Nullam tempus lacus sed nisl mattis venenatis. Sed sed felis sed neque convallis aliquet quis ut erat. Mauris tempor quam eu ultrices faucibus. Morbi vitae porttitor tortor. Phasellus nec tincidunt felis, luctus finibus est. Maecenas molestie, dolor et tempor dignissim, velit libero euismod sem, vel congue velit nulla nec felis. Phasellus vitae purus porta, sodales felis id, consectetur tellus. Vestibulum vitae sem sit amet mi venenatis dictum.</p>
          <p>Etiam sed sapien pretium, vehicula velit in, tempus elit. Praesent aliquet placerat velit quis convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec placerat mi sed turpis tristique, ut accumsan magna mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin varius ultricies massa a congue. Integer tristique luctus ligula, sit amet tristique nibh ultrices eget.</p>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Praesent efficitur metus quis diam dignissim hendrerit.</li>
            <li>In eu ex euismod, tempus mauris in, viverra mauris.</li>
            <li>Praesent auctor libero at porttitor iaculis.</li>
          </ul>

          <div className={css.aboutMeFooter}>
            <Link to="/contact" role="button" className="button button-primary">get in touch</Link>    
          </div>
        </Section>
      </Container>
    </Fragment>
  )
}
