import React from 'react';

import PasswordChangeForm from './PasswordChangeForm/PasswordChangeForm.js';

const passwordChange = props => (
  <React.Fragment>
    <h2 style={{ textAlign: 'center' }}>Change password</h2>
    <PasswordChangeForm />;
  </React.Fragment>
);

export default passwordChange;
