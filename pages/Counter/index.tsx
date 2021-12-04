import React from 'react';
import { connect,ConnectedProps } from 'react-redux'
import { decrementCounter,incrementCounter } from '../../components/redux/actions/counterActions'
import {RootState} from '../../components/redux/store'
import styles from './Counter.module.css'

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux{}

const Home : React.FC<Props> =(props)=>{

  const {counter} = props;

  return(
    <div className={styles.container}>
      <div data-cy="counter-header">COUNT : {counter}</div>
      <button data-cy="counter-increment" onClick={()=>props.incrementCounter()}> + </button>
      <button data-cy="counter-decrement" onClick={()=>props.decrementCounter()}> - </button>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  decrementCounter: decrementCounter,
  incrementCounter: incrementCounter
}

const connector = connect(mapStateToProps,mapDispatchToProps)

export default connector(Home);
