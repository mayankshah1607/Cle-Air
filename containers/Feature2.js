import React, {Component} from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Container,Card,InputGroup,Icon,Input} from 'native-base';
import {StyleSheet,View} from 'react-native';


const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

export default class Feature2 extends Component{
    render(){
        return(
        <Container>
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 37.3318456,
                        longitude: -122.0296002,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                >

                <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey="AIzaSyA-XcvIxZAxf-_s2QG3qXfx7nOvelQIt9k"
                        strokeWidth={4}
                        strokeColor="red"
                    />
                </MapView>
            </View>
            <View  style={{margin:5}}>
                <Card>
                    <InputGroup borderType='rounded' style={{marginBottom: 3}}>
                        <Icon name='home' style={{color:'#384850'}}/>
                        <Input placeholder='Enter your start point...'/>
                    </InputGroup>

                    <InputGroup borderType='rounded'>
                        <Icon name='pin' style={{color:'#384850'}}/>
                        <Input placeholder='Enter your destination...'/>
                    </InputGroup>
                </Card>
            </View>
        </Container>
        );

    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#A0C4E2'
    },
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0,
        flex: 1
    }
})