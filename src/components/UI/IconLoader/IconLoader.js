import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const animate = keyframes`
0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`;

const StyledIconLoader = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: #ccc;
  margin:20px auto 0 auto;
  border-radius: 100%;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${animate}
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
`;

const IconLoader = props => (
  <StyledIconLoader height={props.height} width={props.width} />
);

export default IconLoader;
