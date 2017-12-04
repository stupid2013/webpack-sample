import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <p style={{ marginTop: '24px' }}>{config.greetText}</p>
        <br />
        <br />
        <div>
          注：该demo源于 <a href="http://www.jianshu.com/p/42e11515c10f">入门Webpack，看这篇就够了</a>
        </div>
      </div>
    );
  }
}

export default Greeter;
