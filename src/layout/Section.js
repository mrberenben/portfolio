import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={css.section}>
      { title && <div className={css.sectionTitle}>{ title }</div> }
      <div className={css.sectionContent}>
        { children }
      </div>
    </section>
  )
}