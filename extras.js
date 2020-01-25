import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, Right } from 'native-base';

export default class extras extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {value: 35, Message: 'jumper', 'name' : "Hemanth", key : 1},
                {value: 42, Message: 'shirt', 'name' : "Hemanth", key : 2},
                {value: 56, Message: 'pants', 'name' : "Hemanth", key: 3},
                {value: 71, Message: 'socks', 'name' : "Hemanth", key: 4},
                {value: 72, Message: 'socks', 'name' : "Hemanth", key: 5},
            ]
        } 
    }
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