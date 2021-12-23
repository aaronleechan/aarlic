import { Fragment } from 'react';
import MainHeader from './event-main-header';

interface Props{
    children?: React.ReactNode;
}

const EventLayout: React.FC<Props> = (props) =>{
    return(
        <Fragment>
            <MainHeader/>
                <main>
                    {props.children}
                </main>
        </Fragment>
    )
}

export default EventLayout