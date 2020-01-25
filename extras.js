import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, Right, Card, CardItem, Body } from 'native-base';

export default class extras extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {value: 35, Message: 'jumper', date : "2020/02/12", key : 1},
                {value: 32, Message: 'jumper', date : "2020/02/12", key : 1},
                {value: 31, Message: 'jumper', date : "2020/02/12", key : 1},

            ],
        }
        var sum = 0

    }
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
        <Header />
        <Content>
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