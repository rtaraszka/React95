import React from 'react';
import AppBar from '../AppBar';
import Toolbar from '../../Toolbar/Toolbar';
import TextField from '../../TextField/TextField';
import Button from '../../Button/Button';
import LogoIcon from '../../Icon/LogoIcon';

export default (
  <AppBar shadow='true' fixed='true' uxpId='1'>
    <Toolbar style={{ justifyContent: 'space-between' }} uxpId='2'>
      <Button uxpId='3' style={{ fontWeight: 'bold' }}>
        Start
      </Button>
      <TextField
        placeholder='Search...'
        width={150}
        style={{ marginLeft: 4 }}
        uxpId='5'
      />
    </Toolbar>
  </AppBar>
);
