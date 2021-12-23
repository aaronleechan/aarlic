import React from 'react';
import Link from 'next/link';
import styles from './index.module.css'
import MainLayout from '../components/layout/main-header/main-layout';
import {PageList} from '../data/link-page';


const LandingPage =()=>{

  let UIRender = () =>{
    let UI: any[] = []
    PageList.map((v,i)=>{
      UI.push(
        <div key={i} className={styles.linkButton}>
          <Link href={v.link}>
            <a target="_blank">{v.title}</a>
          </Link>
        </div>
      )
    })
    return UI
  }

  return(
    <div className={styles.container}>
      <MainLayout/>
        <div className={styles.linkContainer}>
          {UIRender()}
        </div>
    </div>
  )
}



export default LandingPage;
