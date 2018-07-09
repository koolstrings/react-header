import React, { Component } from 'react';
import { Header, Body, Right, Button, Icon, Title } from 'native-base';
import IMSDrawer from '../drawer'
import ContextMenu from '../contextMenu'
import SearchBar from '../searchBar'

export default class IMSHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      showSearch : false
    }
  }

  toggleSearchButton(){
    this.setState({
      showSearch: !this.state.showSearch
    })
  }

  render(){
    const { showSearch } = this.state
    if(showSearch){
      return (
          <Header>
              <SearchBar onSearch={this.props.onSearch} toggleSearchButton={this.toggleSearchButton.bind(this)}/>
          </Header>
      )
    }
    return (
        <Header>
          <IMSDrawer />
          <Body>
            <Title>Header1</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.toggleSearchButton.bind(this)}>
              <Icon name='search' />
            </Button>
            <ContextMenu  onClickMore={this.props.onClickMore}/>
          </Right>
        </Header>
    )
  }
}
