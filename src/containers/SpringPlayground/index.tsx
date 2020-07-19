import React from 'react';
import { Container, Box } from '../../components/containers/styles';
import { Space } from '../../components/space';
import { SpringButton } from './SpringButton';
import { SpringPlagroundContainer } from './styles';
import { SpringTrailBar } from './SpringTrailBar';
import { SpringTrailBalls } from './SpringTrailBalls';

export const SpringPlayground = () => {
  return (
    <SpringPlagroundContainer>
      <Container>
        <Space height={80} />
        <h1>SpringPlayground</h1>
        <Space height={80} />
        <Box border={2} flex={true}>
          <SpringButton />
          <SpringTrailBar />
          <SpringTrailBalls />
        </Box>
      </Container>
    </SpringPlagroundContainer>
  );
};
