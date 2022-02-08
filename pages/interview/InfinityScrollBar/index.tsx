import React,{useState,useEffect,useRef} from 'react';
import { connect,ConnectedProps } from 'react-redux';
import {RootState} from '../../../components/redux/store';
import classes from './InfinityScrollBar.module.css';
import {Loaders} from '../../../components/commons'

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux{}

const InfinityScrollBar: React.FC<Props> =(props) =>{

    const [listItem,setListItem] = useState(Array.from(Array(30).keys(),n=>n+1));
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const [fetching,setFetching] = useState(false)
    const [scrollingTop,setScrollingTop] = useState(0)

    useEffect(()=>{
        if(!fetching) return;
        fetchingApi()
    },[fetching])

    const fetchingApi = () =>{
        setTimeout(()=>{
            setListItem(prevState=>([...prevState,...Array.from(Array(30).keys(),n=>n+prevState.length + 1)]));
            setFetching(false)
        },2000);
    }

    const elementScroll = () =>{
        if(scrollBarRef.current && scrollingTop > scrollBarRef.current.scrollTop){
            setFetching(true)
        }
        setScrollingTop(scrollBarRef.current ? scrollBarRef.current.scrollTop + 100 : 0)
    }


    return(
        <div className={classes.container}>
            <div><h2>Infinity Scroll Bar Sample</h2></div>
            <div className={classes.listcontainer} id="scrollBar" ref={scrollBarRef} onScroll={elementScroll}>
                <ul className={classes.listdisplay}>
                    {listItem.map((val,i)=><li className={classes.listCard} key={i}>This is List {val}</li>)}
                </ul>
                {fetching && <Loaders/>}

            </div>
        </div>

    )
}

const mapStateToProps = (state: RootState) => ({

  });
  
  const mapDispatchToProps = {

  }
  
  const connector = connect(mapStateToProps,mapDispatchToProps)
  
  export default connector(InfinityScrollBar);