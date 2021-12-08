import React from 'react';
import Link from 'next/link';
import classes from './button.module.css'

interface LayoutProps {
    children?: React.ReactNode;
}

const ButtonSubmit: React.FC<LayoutProps> = ({children}) => {
    return <button className={classes.btn}>{children}</button>
}

export default ButtonSubmit;