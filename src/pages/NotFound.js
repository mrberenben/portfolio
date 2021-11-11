import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.notFound}>
      404
      <Link to="/" className="button button-primary">Back Home</Link>
    </div>
  )
}
