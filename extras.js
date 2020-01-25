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
            <Text style={{marginLeft:50 }}>{data.date}</Text>
          </ListItem>
          );
        this.sum = this.state.data.reduce((prev, cur) => cur.value+prev, 0)
        console.log(this.sum)

    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/thumbnail.png')} />
                <Body>
                  <Text>Hemanth Kumar J</Text>
                  <Text note>B181004CS</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          {this.extras}
          </Content>
          <Content style = {{position: 'absolute', left: 0, right: 0, bottom: 0}}>
          <Card>
            <CardItem>
              <Body>
                <Text style = {{marginLeft: 'auto', fontWeight:'bold'}}>
                  TOTAL:    Rs. {this.sum}
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Content>
      </Container>
    );
  }
}