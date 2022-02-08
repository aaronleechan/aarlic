import React,{useState,useEffect} from 'react';
import classes from './loaders.module.css';

export const Loaders = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.loaders}/>
        </div>
    )
}

export default Loaders;