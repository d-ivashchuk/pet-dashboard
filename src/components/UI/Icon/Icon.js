import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  display: block;
  margin: ${props => (props.margin ? '0' : '0 auto 5px auto')}
  width: ${props => props.width};
  height: : ${props => props.height};
`;
const Icon = props => (
  <StyledIcon
    margin={props.margin}
    src={props.src}
    height={props.height}
    width={props.width}
  />
);

export default Icon;
