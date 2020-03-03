import React from 'react';
import Window from '../Window';
import WindowContent from '../../WindowContent/WindowContent';
import WindowHeader from '../../WindowHeader/WindowHeader';

export default (
  <Window shadow={false} uxpId='0'>
    <WindowHeader uxpId='1'>react95.exe</WindowHeader>
    <WindowContent uxpId='2'>
      <ul>
        <li>something here</li>
        <li>something here</li>
        <li>something here</li>
        <li>something here</li>
      </ul>
    </WindowContent>
  </Window>
);
