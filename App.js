import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { AppLoading } from 'expo';
import { Container, Text, Button, Content, Header, Form, Item, Input, Label, Left, Body, Title, Right, Subtitle, Row } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
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
            {/* <Subtitle>Code.init()</Subtitle> */}
          </Body>
        </Header>
        <Container>
          <Content>
            <Form style={styles.form}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <Body />
            <Button style={styles.button} rounded>
              <Text>Submit</Text>
            </Button>
          </Content>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    margin: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  textField: {
    marginBottom: 10
  },
  button: {
    margin: 10,
  }
});