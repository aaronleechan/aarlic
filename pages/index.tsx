import React from 'react';
import Link from 'next/link';
import styles from './index.module.css'
import Counter from './Counter';

const PageList = [
  {title: Counter, link:"/Counter"}
]

const LandingPage =()=>{

  return(
    <div className={styles.container}>
      <h1>This is Landing Page</h1>
      <div className={styles.linkContainer}>

        <div className={styles.linkButton}>
          <Link href="/Counter">
            <a>Counter</a>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LandingPage;
