import React , {Component} from 'react';

class SigninScreen extends Component {
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
      
      const {navigate} = this.props.navigation;
  
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
            </Form>
            <Body />
            <Button rounded onPress={() =>navigate('Signup')} >
              <Text>Sign Up</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }