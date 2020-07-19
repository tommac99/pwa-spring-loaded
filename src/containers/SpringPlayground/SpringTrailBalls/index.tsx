import React, { FC, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { Button } from '../../../components/button';
import { Space } from '../../../components/space';
import { Box } from '../../../components/containers/styles';

export const SpringTrailBalls = () => {
  const [show, setShow] = useState(false);

  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];

  const trailSprings = useTrail(colors.length, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: {
      opacity: show ? 1 : 0,
      transform: `translateY(${show ? -100 : 0}px)`,
    },
  });

  return (
    <Box border={2} contentFit={true}>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        {trailSprings.map((spring, index) => (
          <animated.div
            key={colors[index]}
            style={{
              ...spring,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
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
