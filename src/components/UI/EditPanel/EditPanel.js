import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon/Icon.js';

import edit from '../../../assets/ui_icons/edit.svg';

const StyledEditPanel = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #10aded;
  padding: 5px;
  color: white;
`;

const EditPanel = props => (
  <StyledEditPanel>
    <div>Pet profile</div>
    <div onClick={props.clicked}>
      <Icon src={edit} width="20px" height="20px" margin />
    </div>
  </StyledEditPanel>
);

export default EditPanel;
