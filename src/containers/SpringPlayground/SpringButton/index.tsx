import React, { FC, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from '../../../components/button';
import { Space } from '../../../components/space';
import { Box } from '../../../components/containers/styles';

export const SpringButton = () => {
  const [show, setShow] = useState(false);

  const spring = useSpring({
    opacity: show ? 1 : 0,
    transform: `translate(${show ? 50 : 0}px)`,
    config: {
      mass: 6,
    },
  });

  // const spring = useSpring({
  //   from: {
  //     opacity: 0,
  //     transform: `translate(0px)`,
  //   },
  //   to: {
  //     opacity: 1,
  //     transform: `translate(120px)`,
  //   },
  //   config: {
  //     mass: 6,
  //   },
  // });

  return (
    <Box border={2} contentFit={true}>
      <animated.div style={{ ...spring, display: 'inline-block' }}>
        <h1>Hello</h1>
      </animated.div>
      <Button onClick={() => setShow(!show)}>Press me</Button>
    </Box>
  );
};
