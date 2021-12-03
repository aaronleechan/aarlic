import React ,{useEffect, useState} from 'react';
import { connect,ConnectedProps } from 'react-redux'
import { decrementCounter,incrementCounter } from '../redux/actions/counterActions'
import { CounterState } from '../redux/reducers/counterReducer'
import {RootState} from '../redux/store'

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux{}

const Home : React.FC<Props> =(props)=>{

  const {counter} = props;

  return(
    <div>
      <div>COUNT : {counter}</div>
      <button onClick={()=>props.incrementCounter()}> + </button>
      <button onClick={()=>props.decrementCounter()}> - </button>
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
