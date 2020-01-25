import React, {Component} from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, ScrollView, AppRegistry} from 'react-native'
import { Container, Text, Button, Content, Header, Form, Item, Input, Label, Left, Body, Title, Right, Subtitle, Row } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class SignupScreen extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
          <Header>
            <Left />
            <Body>
              <Title>Mess Management</Title>
              <Subtitle>Code.init()</Subtitle>
            </Body>
            <Right />
          </Header>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                  <Label>Email</Label>
              </Item>
            </Form>
            <Body />
            <Button rounded onPress={() =>this.props.navigation.navigate('Home')} >
              <Text>Sign Up</Text>
            </Button>
          </Content>
        </Container>
    )
  }
};
