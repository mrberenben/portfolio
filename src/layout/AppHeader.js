import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './AppHeader.module.css';

// layout
import Container from './Container';

const ROUTES = [
  { id: 0, title: 'About Me', path: '/' },
  { id: 1, title: 'Works', path: '/works' },
  { id: 2, title: 'Comments', path: '/comments' },
  { id: 3, title: 'Contact', path: '/contact' }
]

export default function AppHeader() {
  const { pathname } = useLocation();
  const [mobileNavigationVisible, setMobileNavigationVisible] = useState(false);

  const renderRoutes = () => (
    ROUTES.map(route => (
      <Link 
        key={route.id} 
        to={route.path} 
        className={`${css.route} ${route.path === pathname ? css.routeActive : undefined}`}
        onClick={() => setMobileNavigationVisible(false)}
      >
        { route.title }
      </Link> 
    ))
  );

  return (
    <header className={css.appHeader}>
      <Container>
        <div className={css.headerWrapper}>
          <div className={css.appLogo}>eren kuliş</div>

          <nav role="navigation" className={css.appNavigation}>
            { renderRoutes() }
          </nav>

          <div className={`${css.mobileNavigation} ${mobileNavigationVisible ? css.active : undefined}`}>
            <button 
              type="button"
              className={css.mobileNavigationButton}
              onClick={() => setMobileNavigationVisible(prevState => !prevState)}
            >
              <span></span>
              <span></span>
            </button>

            <div className={css.mobileNavigationMenu}>
              <div className={css.mobileNavigationRoutes}>
                { renderRoutes() }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
