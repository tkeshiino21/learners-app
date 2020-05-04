import React, { FC } from 'react';
import { Button } from '../atoms';
import { secToMMSS } from './secToMMSS';

type Timer = {
  leftSec: number;
  active: boolean;
  start: () => void;
  reset: () => void;
  stop: () => void;
};

const Timer: FC<Timer> = ({ leftSec, active, start, reset, stop }) => {
  return (
    <div>
      <time style={{ fontSize: '100px' }}>{secToMMSS(leftSec)}</time>
      <br />
      <Button
        className="primary"
        mr="12px"
        onClick={start}
        disabled={active}
        color="primary"
      >
        START
      </Button>
      <Button
        className="outlined"
        mr="12px"
        onClick={stop}
        disabled={!active}
        color="primary"
      >
        STOP
      </Button>
      <Button className="outlined" onClick={reset} color="secondary">
        RESET
      </Button>
    </div>
  );
};

export default Timer;
