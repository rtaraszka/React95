import React from 'react';
import { storiesOf } from '@storybook/react';

import ListDivider from './ListDivider';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

storiesOf('ListDivider', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <List>
      <ListItem>Item 1</ListItem>
      <ListDivider />
      <ListItem>Item 2</ListItem>
      <ListDivider />
      <ListItem>Item 3</ListItem>
    </List>
  ))
  .add('vertical', () => (
    <List inline>
      <ListItem>Item 1</ListItem>
      <ListDivider vertical size='lg' />
      <ListItem>Item 2</ListItem>
      <ListDivider vertical size='lg' />
      <ListItem>Item 3</ListItem>
    </List>
  ));
