import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Button, Icon, Left} from 'native-base';
import IMSDrawer from '../drawer'

const IMSHeader = (props)=> {
  return (
    <View style={{display:'flex', flexDirection:'row', flex:1, padding: 10, backgroundColor:'white', shadowOffset:{  width: .5,  height: .5,  },
shadowColor: 'black',
shadowOpacity: 0.2}}>
      <Left>
        <Button transparent onPress={()=>{console.log('hello')}}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <TextInput placeholder="Username" style={{flex:3}}/>
      <Button transparent onPress={props.toggleSearchButton}>
        <Text>Search</Text>
      </Button>
    </View>
  );
}

export default IMSHeader
