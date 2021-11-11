import css from './GridLayout.module.css';

export default function GridLayout({ column, gap = 16, children }) {
  const DYNAMIC_GRID_STYLES = {
    gridTemplateColumns: `repeat(${column}, 1fr)`,
    gridAutoRows: `minmax(min-content, max-content)`,
    gridGap: `${gap}px`
  };

  return (
    <div className={css.gridLayout} style={DYNAMIC_GRID_STYLES}>
      { children }
    </div>
  );
}
