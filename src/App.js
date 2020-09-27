import React from 'react';
import {Route, Link} from 'react-router-dom';
import Typography from './containers/Typography/Typography';

import styles from './App.module.scss';
import utilStyles from './styles/utils.module.scss';

function App() {
  return (
    <div className={['container', styles.App].join(' ')}>
      <nav className={styles.App__Nav}>
        <Link to='/'>Home</Link>
        <Link to='/typography'>Typography</Link>
      </nav>
      <h1 className={utilStyles.enterFromLeft}>React seed project</h1>
      <Route path='/typography' component={Typography} />
    </div>
  );
}

export default App;
