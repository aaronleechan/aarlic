import React from 'react';
import Link from 'next/link';
import classes from './button.module.css'

interface LayoutProps {
    children?: React.ReactNode;
    link: string;
}

const ButtonLink: React.FC<LayoutProps> = ({link,children}) => {
    return <Link href={link}>
                <a className={classes.btn}>{children}</a>
            </Link>
}

export default ButtonLink;