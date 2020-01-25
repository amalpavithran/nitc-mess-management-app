import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, ScrollView, AppRegistry } from 'react-native'
import { Container, Text, Button, Content, Header, Form, Item, Input, Label, Left, Body, Title, Right, Subtitle, Row } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import SignupScreen from './Signup';
import extras from './extras';
import * as SecureStore from 'expo-secure-store';

var url = "http://nitc-mess.anandu.net"

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      email: "reach2anandu@gmail.com",
      pass: 'password',
      error: null,
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
      <ScrollView>
        <Header>
          <Left />
          <Body>
            <Title>Mess Management</Title>
            {/* <Subtitle>Code.init()</Subtitle> */}
          </Body>
        </Header>
        <Container style={{ flexGrow: 1, alignItems: 'center', flexDirection: 'row', }}>
          <Content style={{ marginTop: -100 }}>
            <Form style={styles.form}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(text) => { this.state.email = text }} />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={(text) => { this.state.pass = text }} />
              </Item>
              <Button style={styles.button}
                onPress={() => {
                  let resCode = null;
                  fetch(url + '/api/auth/signin', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      'email': this.state.email,
                      "password": this.state.pass,
                    })
                  })
                    .then(data => {
                      resCode = data.status;
                      return data.json();
                    })
                    .then(async res => {
                      if (resCode === 200) {
                        const token = res.token;
                        console.log(token);
                        await SecureStore.setItemAsync('token', token);
                        await SecureStore.setItemAsync('name',res.user.name);
                        await SecureStore.setItemAsync('roll',res.user.rollNumber);
                        this.props.navigation.navigate('extras')
                      }else{
                        this.state.error = res.message
                      }
                    })
                }}>
                <Text>Submit</Text>
              </Button>
              <Button style={styles.button}
                onPress={async () => {
                  this.props.navigation.navigate('Signup')
                }}>
                <Text>Sign Up</Text>
              </Button>
            </Form>
            <Text>{this.state.error}</Text>
            <Body />
          </Content>
        </Container>
      </ScrollView>
    );

  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Signin,
    navigationOptions: {
      title: 'Home',
      headerShown: false
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Home',
      headerShown: false
    },
  },
  extras: {
    screen: extras,
    navigationOptions: {
      title: 'Home',
      headerShown: false
    },
  }
});

export default createAppContainer(AppNavigator);

function login() {
}
const styles = StyleSheet.create({
  form: {
    margin: 10,
    marginBottom: 20,
  },
  button: {
    flexGrow: 1,
    marginTop: 30,
    justifyContent: "center",
    borderRadius: 7
  }
});
