import { Fragment, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Works.module.css';

import { GoLinkExternal } from 'react-icons/go';

// components
import Banner from '../components/global/Banner';

// layout
import Container from '../layout/Container';
import Section from '../layout/Section';
import GridLayout from '../layout/GridLayout';

// utils
import { createUUID } from '../utils';

const WORKS = [
  { id: createUUID(), title: 'Placeholder Project', cover: '//picsum.photos/1920/1080' },
  { id: createUUID(), title: 'Placeholder Project', cover: '//picsum.photos/1920/1080?1' },
  { id: createUUID(), title: 'Placeholder Project', cover: '//picsum.photos/1920/1080?2' },
  { id: createUUID(), title: 'Placeholder Project', cover: '//picsum.photos/1920/1080?3' },
]

export default function Works() {
  const workCursorRef = useRef(null);

  const renderWorks = () => (
    WORKS.map(work => (
      <Link 
        key={work.id}
        to="/"
        target="_blank"
        rel="noreferrer"
        className={css.work}
        onMouseOver={() => (workCursorRef.current.style.opacity = 1)}
        onMouseOut={() => (workCursorRef.current.style.opacity = 0)}
      >
        <img src={work.cover} alt={work.title} />
      </Link>
    ))
  )

  useEffect(() => {
    const handleCursorMove = e => {
      const x = e.clientX, y = e.clientY;

      if(workCursorRef.current) {
        workCursorRef.current.style.top = `${y}px`;
        workCursorRef.current.style.left = `${x}px`;
      }
    }

    document.addEventListener('mousemove', e => handleCursorMove(e));
    return () => document.removeEventListener('mousemove', handleCursorMove);
  }, [])

  return (
    <Fragment>
      <Banner title="Works" />

      <Container>
        <Section title="Works">
          <GridLayout column={2} gap={32}>
            { renderWorks() }
          </GridLayout>
        </Section>
      </Container>

      <div ref={workCursorRef} className={css.workCursor}>
        <span className={css.workCursorIcon}>
          <GoLinkExternal />
        </span>
        <span>View Project</span>
      </div>
    </Fragment>  
  )
}
