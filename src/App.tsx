import * as React from 'react';

// const styles = require('./App.css');
import * as styles from './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt='logo' />
          <h1 className={styles.AppTitle}>Welcome to React with HMR</h1>
        </header>
        <p className={styles.AppIntro}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
