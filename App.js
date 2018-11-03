import Tts from 'react-native-tts';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Body, Content, StyleProvider} from 'native-base';
import Feature1 from './containers/Feature1';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Feature2 from './containers/Feature2';
import Blind from './containers/Blind'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {f1: 1,f2:0,f3:0}
  }

  componentDidMount(){
    Tts.speak('Welcome to cle-air. For voice enabled mode, tap on the bottom right corner.')
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            {this.state.f1 ? <Feature1/> : null}
            {this.state.f2 ? <Feature2/> : null}
            {this.state.f3 ? <Blind/> : null}
          </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#00A7E1'}}>
            <Button onPress={() => this.setState({f1:1,f2:0,f3:0})}>
              <Icon active name="pin" style={{color: 'white'}} />
            </Button>
            <Button onPress={() => this.setState({f1:0,f2:1,f3:0})}>
              <Icon name="compass" style={{color: 'white'}}/>
            </Button>
            <Button onPress={() => this.setState({f1:0,f2:0,f3:1})}>
              <Icon name="glasses" style={{color: 'white'}}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </StyleProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left:0
  }
})
