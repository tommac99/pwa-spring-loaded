import styled from 'styled-components';

export const Container = styled.div<{ left?: number; right?: number }>`
  width: 100%;
  padding-left: ${({ left }) => (left ? left : 20)}px;
  padding-right: ${({ right }) => (right ? right : 20)}px;
`;

export const Box = styled.div<{
  width?: number;
  padding?: string;
  border?: number;
  center?: boolean;
  contentFit?: boolean;
  flex?: boolean;
}>`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  padding: ${({ padding }) => (padding ? padding : 20)}px;
  border: ${({ border }) => (border ? border : 0)}px solid #e7e7e7;
  ${({ flex }) => (flex ? 'display: flex;' : '')}
  ${({ center }) =>
    center ? 'display: flex;justify-content: center;align-items: center;' : ''}
  ${({ contentFit }) =>
    contentFit ? 'width: auto;display: inline-block;' : ''}
`;
