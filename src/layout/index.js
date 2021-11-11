import { Fragment } from 'react';
import { Outlet } from 'react-router';

// layout
import AppHeader from './AppHeader';

export default function Index() {
  return (
    <Fragment>
      <AppHeader />
      
      <main role="main" className="main">
        <Outlet />
      </main>
    </Fragment>
  )
}
