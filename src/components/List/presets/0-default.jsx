import React from 'react';
import List from '../List';
import ListItem from '../../ListItem/ListItem';

export default (
  <List inline='true' uxpId='0'>
    <ListItem uxpId='1'>Tackle</ListItem>
    <ListItem uxpId='2'>Growl</ListItem>
    <ListItem disabled uxpId='3'>
      Razor Leaf
    </ListItem>
  </List>
);
