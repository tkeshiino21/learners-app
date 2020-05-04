import React, { FC, useEffect, useState } from 'react';
import Timer from '../organisms/Timer';
import PageLayout from '../organisms/PageLayout';
import { Heading, Wrap, Text } from '../atoms';

const useCountdown = (limit: number): any => {
  const [leftSec, setLeftSec]: [number, any] = useState(limit);
  let [timerObj, setTimerObj]: any = useState('');
  const [active, setActive]: [boolean, any] = useState(false);

  const setCountdown = () => {
    if (!active) {
      setTimerObj(
        setInterval(() => {
          setLeftSec((prev: number) => prev - 1);
        }, 1000),
      );
    }
  };

  const afterTimeup = (left: any): any => {
    if (left <= 0) {
      alert('FINISHED');
      setLeftSec(() => limit);
    }
  };

  const reset = () => {
    return setLeftSec(limit);
  };

  const stop = () => {
    setActive(false);
    clearInterval(timerObj);
  };

  const start = () => {
    if (!active) {
      clearInterval(timerObj);
      setCountdown();
      setActive(true);
    }
  };

  useEffect(() => {
    afterTimeup(leftSec);
  }, [leftSec]);

  return [
    [leftSec, active],
    [reset, stop, start],
  ];
};

const Pomodolo: FC = () => {
  const TIMER = 60 * 25;
  const [[leftSec, active], [reset, stop, start]] = useCountdown(TIMER);

  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Pomodolo
        </Heading>
        <Text>
          ポモドーロ・テクニックは２５分間だけ集中する時間管理法です。是非チャレンジしてみてください。
        </Text>
        <section>
          <Timer
            leftSec={leftSec}
            active={active}
            reset={reset}
            stop={stop}
            start={start}
          />
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Pomodolo;
