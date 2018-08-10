import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon/Icon.js';

import edit from '../../../assets/ui_icons/edit.svg';

const StyledEditPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #10aded;
  padding: 5px;
  color: white;
`;

const EditPanel = props => (
  <StyledEditPanel>
    <div>{props.label}</div>
    {props.editable ? (
      <div onClick={props.clicked}>
        <Icon src={edit} width="20px" height="20px" margin />
      </div>
    ) : null}
  </StyledEditPanel>
);

export default EditPanel;
