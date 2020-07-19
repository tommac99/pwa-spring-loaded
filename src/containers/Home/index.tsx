import React from 'react';
import { HomeContainer } from './styles';
import { Box } from '../../components/styles/containers/styles';
import { Space } from '../../components/styles/space';

export const Home = () => {
  return (
    <HomeContainer>
      <Space height={200} />
      <Box center={true}>
        <h1>Home</h1>
      </Box>
    </HomeContainer>
  );
};
