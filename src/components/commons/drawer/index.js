import React from 'react';
import {Left, Button, Icon } from 'native-base';

const IMSDrawer = (props)=> {
  return (
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
  );
}

export default IMSDrawer
