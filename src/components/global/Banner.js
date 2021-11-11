import css from './Banner.module.css';

// layout
import Container from '../../layout/Container';

export default function Banner({ title }) {
  const backdropText = title.replace(/\s/g, '').repeat(25);

  return (
    <div className={css.banner}>
      <Container>
        <div className={css.bannerWrapper}>
          <div className={css.lines}>
            <span className={css.line}>{backdropText}</span>
            <span className={css.line}>{backdropText}</span>
            <span className={css.line}>{backdropText}</span>
          </div>
        </div>
      </Container>
    </div>
  )
}
