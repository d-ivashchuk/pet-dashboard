import React from 'react';
import styled from 'styled-components';

const StyledBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #07f;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding-top: 12px;
  height: 25px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
  margin-bottom: 5px;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 16px;
  left: 0;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  z-index: -2;
  transition: all 0.2s ease;
`;

const StyledWrapper = styled.div`
  position: relative;
  margin: 0 auto 10px auto;
  width: 100%;
  max-width: 280px;
  & ${StyledInput}:focus + ${StyledLabel} + ${StyledBorder}{
    transform: scaleX(1);
  }
  & ${StyledInput}:focus + ${StyledLabel} {
    color: #07f;
   transform: translateY(-26px) scale(0.75);
  }
  & ${StyledInput}:not(:placeholder-shown) + ${StyledLabel}{
    color #5A667F;
    transform: translateY(-26px) scale(.75)
  }
`;

class Input extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <StyledInput
          onChange={this.props.onValueChange}
          value={this.props.value}
          type={this.props.type}
          placeholder="&nbsp;"
        />
        <StyledLabel>{this.props.label}</StyledLabel>
        <StyledBorder />
      </StyledWrapper>
    );
  }
}

export default Input;
