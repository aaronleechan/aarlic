import { Fragment } from 'react';
import MainHeader from './main-header';

interface Props{
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = (props) =>{
    return(
        <Fragment>
            <MainHeader/>
                <main>
                    {props.children}
                </main>
        </Fragment>
    )
}

export default Layout