import React from 'react';
import Link from 'next/link';
import styles from './index.module.css'
import Counter from './Counter';

const PageList = [
  {title: Counter, link:"/Counter"}
]

const LandingPage =()=>{

  let UIRender = () =>{
    let UI: any[] = []
    PageList.map((v,i)=>{
      UI.push(
        <div key={i} className={styles.linkButton}>
          <Link href="/Counter">
            <a>Counter</a>
          </Link>
        </div>
      )
    })
    return UI
  }

  return(
    <div className={styles.container}>
      <h1 data-cy="header">This is Landing Page</h1>
      <div className={styles.linkContainer}>
        {UIRender()}
      </div>
    </div>
  )
}



export default LandingPage;
