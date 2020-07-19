import React, { FC, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { Button } from '../../../components/button';
import { Space } from '../../../components/space';
import { Box } from '../../../components/containers/styles';

export const SpringTrailBar = () => {
  const [show, setShow] = useState(false);

  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];

  const trailSprings = useTrail(colors.length, {
    from: { height: '0px' },
    to: { height: show ? '80px' : '0px' },
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
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        {trailSprings.map((spring, index) => (
          <animated.div
            key={colors[index]}
            style={{
              ...spring,
              width: '20px',
              marginRight: '10px',
              transformOrigin: 'bottom',
              backgroundColor: colors[index],
            }}
          />
        ))}
      </div>
      <Button onClick={() => setShow(!show)}>Press me</Button>
    </Box>
  );
};
