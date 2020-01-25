import React, { Component } from 'react';
import SecureStorage from 'react-native-secure-storage'
import { Container, Header, Content, List, ListItem, Text, Separator, Right } from 'native-base';

export default class extras extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        } 
    }

  // async getExtras(){
  //   const token = await SecureStorage.getItem('token');
  //   fetch(url + '{{url}}/api/users/dues',Header
  // }
  render() {
      this.extras = this.state.data.map((data, key) =>
      <ListItem last>
            <Text>{data.Message}</Text>
            <Text style={{marginLeft:'auto' }}>Rs.{data.value}</Text>
          </ListItem>
          
    );
    
    return (
      <Container>
        <Header />
        <Content>
          {this.extras}
          </Content>
      </Container>
    );
  }
}