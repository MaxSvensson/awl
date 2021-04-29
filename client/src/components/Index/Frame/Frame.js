import React from 'react';
import styles from './Frame.module.css'

const Frame = ({children}) => {
  return <div id={styles.frame}>
    {children}
  </div>
}

export default Frame;