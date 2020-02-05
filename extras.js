import React, { Component } from 'react';
import { BackAndroid, BackHandler } from "react-native";

import * as SecureStore from 'expo-secure-store';
import { Container, Header, Content, List, ListItem, Text, Separator, Right, Card, CardItem, Left, Thumbnail, Body, Title, Icon, Button } from 'native-base';
import Signin from './Signin';
export default class Extras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      roll: null,
      token: null,
      data: [{ 'Message': 'extra', "value": 10, 'date': "12-23-23", 'token': 1 }],
      exit: false
    }
    this.fetchData = this.fetchData.bind(this)
    this.fetchData();
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    if (!this.state.exit) {
      ToastAndroid.show('Press again to exit', ToastAndroid.SHORT);
      this.setState({
        exit: true
      });
      return true
    }
    else
      BackAndroid.exitApp();
  }
  async fetchData() {
    const token = await SecureStore.getItemAsync('token');
    const name = await SecureStore.getItemAsync('name');
    const roll = await SecureStore.getItemAsync('roll')
    let res = await fetch("http://nitc-mess.anandu.net/api/users/dues",
      {
        "credentials": "omit", "headers": { "accept": "*/*", "Authorization": `Bearer ${token}` },
        "method": "GET"
      }
    ).then(res => res.json())
    this.setState({
      data: res,
      name,
      roll,
      token
    })
  }
  componentWillUnmount(){
  }
  render() {
    // if(this.state.token==null){
    //   this.props.navigation.goBack();
    // }
    this.extras = this.state.data.map((data, key) =>
      <ListItem last key={key}>
        <Text>{data.message}</Text>
        <Text style={{ marginLeft: 'auto' }}>Rs.{data.amount}</Text>
        <Text style={{ marginLeft: 50 }}>{(new Date(data.updatedAt)).toLocaleDateString()}</Text>
      </ListItem>
    );
    this.sum = this.state.data.reduce((prev, cur) => cur.amount + prev, 0)
    console.log(this.sum)
    if (this.state.token) {
      return (
        <Container>
          <Content>
            <Card style={{ margin: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={require('./assets/thumbnail.png')} />
                  <Body>
                    <Text>{this.state.name}</Text>
                    <Text note>{this.state.roll}</Text>
                  </Body>
                </Left>
                <Right>
                  <Button icon transparent onPress={async () => {
                    await SecureStore.deleteItemAsync('token');
                    this.setState({
                      token: null
                    })
                    console.log('ext screen')
                  }}>
                    <Icon name="sign-out-alt" type='FontAwesome5' />
                  </Button>
                </Right>
              </CardItem>
            </Card>
            {this.extras}
          </Content>
          <ListItem />
          <ListItem />
          <Content style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <Card>
              <CardItem>
                <Body>
                  <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                    TOTAL:    Rs. {this.sum}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    } else {
      return <Signin />
    }
  }
}