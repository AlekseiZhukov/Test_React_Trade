import React from 'react';
import s from './Timert.module.scss'
import Countdown, {zeroPad} from 'react-countdown';
import {ReactComponent as Hourglass} from '../../assets/hourglass.svg'
interface TimerProps {
  changeCandidate: () => void
}
interface Rerender {
  minutes: number
  seconds: number
  hours: number
  completed: boolean
}
const Timer:React.FC<TimerProps> = ({changeCandidate}) => {


  const renderer = ({  hours, minutes, seconds, completed }:Rerender) => {
    if (completed) {

      changeCandidate()
    } else {

      return <span>{zeroPad(hours, 2)}:{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
    }
  };

  return (
    <div className={s.root}>
      <Countdown
        date={Date.now() + 120000}
        renderer ={renderer}
        zeroPadTime ={2}
      />
      <Hourglass />
    </div>
  );
};

export default Timer;