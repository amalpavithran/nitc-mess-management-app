import React, {Component} from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, ScrollView, AppRegistry} from 'react-native'
import { Container, Text, Button, Content, Header, Form, Item, Input, Label, Left, Body, Title, Right, Subtitle, Row } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import SignupScreen from './Signup';
import extras from './extras';

var url = "http://nitc-mess.anandu.net"

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      email: null,
      pass: null
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
      <ScrollView style={{ flexGrow: 1 }}>
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
                  this.props.navigation.navigate('extras');
                  console.log(this.state.email);
                  console.log(this.state.pass);
                  fetch(url + '/api/auth/signin', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      'email': this.state.email,
                      "password": this.state.pass,
                    })
                  }).then(data => data.json())
                    .then((d) => {
                      console.log(d)
                    })
                }}>
                <Text>Submit</Text>
              </Button>
              <Button style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate('Signup')
                }}>
                <Text>Sign Up</Text>
              </Button>
            </Form>
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
  },
  Signup: {
    screen: SignupScreen,
  },
  extras: {
    screen: extras
  }
});

export default createAppContainer(AppNavigator);

function login() {
}
const styles = StyleSheet.create({
  form: {
    margin: 10,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "column"
  },
  button: {
    flexGrow: 1,
    marginTop: 30,
    justifyContent: "center",
    borderRadius: 7
  }
});
