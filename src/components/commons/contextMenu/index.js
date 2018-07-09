import React from 'react';
import {Button, Icon} from 'native-base';
import IMSDrawer from '../drawer'

const IMSHeader = (props)=> {
  const { contexMenu } = props
  return (
      <Button transparent>
        <Icon name='more' />
      </Button>
  );
}

export default IMSHeader
