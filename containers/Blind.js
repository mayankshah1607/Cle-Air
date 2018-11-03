import React, {Component} from 'react';
import Tts from 'react-native-tts';
import {View,Text,Button} from 'react-native';
import { styles as s } from 'tachyons-react-native';
import Voice from 'react-native-voice';


export default class Blind extends Component{

    constructor(props){
        super(props)
    }

    act(){
        Tts.speak('Hi. I am Lexie. I am your voice enabled assistant. How may I help you? I\'m listening.')
        setTimeout(()=>{
            Tts.speak('The Air Pollution index at your current location is 428. It is hazardous to go outside.')
        },10000)
    }
    componentDidMount(){
       this.act()
    }
    render(){
        return(
        <View>  
            <View>
                <Text style={[s.ma3,s.fw4,s.f3]}>Assistance for visually impaired</Text>
            </View>
        </View>
        );
    }
}