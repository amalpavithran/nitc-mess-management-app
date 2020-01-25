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

class Signin extends Component {
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
                <Label>Username</Label>
                <Input onChangeText={(text) => { user = text }} />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={(text) => { pass = text }} />
              </Item>
              <Button style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate('Signup')
                }}>
                <Text>Submit</Text>
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
  }
});

export default createAppContainer(AppNavigator);

var user
var pass
function login() {

}
const styles = StyleSheet.create({
  form: {
    margin: 10,
    marginBottom: 20,
    alignItems: "center",
    flexDirection:"column"
  },
  button: {
    flexGrow:1,
    marginTop:30,
    justifyContent: "center",
    borderRadius: 7
  }
});
