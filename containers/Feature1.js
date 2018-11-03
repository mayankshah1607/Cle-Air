import React, {Component} from 'react';
import MapView, {Marker, Circle} from 'react-native-maps';
import {StyleSheet,View} from 'react-native';
import { Container, Input,Item,Card, Icon,CardItem,Body,Text,Grid,Col,Row} from 'native-base';
import { styles as s } from 'tachyons-react-native'

export default class Feature1 extends Component{

    constructor(props){
        super(props)
        this.state = {
            aqis: '',
            loading: false,
            lat: 12.923604,
            long: 77.4964626,
            status: '',
            avg: '',
            color: ''
        }
    }

    sumArr(arr) {

    }
    fetchData(){

        fetch('https://deltarvce.herokuapp.com/fetchLocationData',{
            method: 'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                lat: this.state.lat,
                long: this.state.long,
                apiReq: "abcd1234"
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.code === 1) {
                const arr = data.message;
                this.setState({aqis: arr, avg: arr.reduce((a,b) => a+b,0)/arr.length})

                if (arr[0] > 300) {this.setState({status: 'Hazardous'})}

                if (arr[0] < 300 && arr[0] >= 200) {this.setState({status: 'Very Unhealthy',color: '#E63B2E25'})}
                if (arr[0] < 200 && arr[0] >= 150) {this.setState({status: 'Unhealthy'})}
                if (arr[0] < 150 && arr[0] >= 100) {this.setState({status: 'Unhealthy for sensitive groups'})}
                if (arr[0] < 100 && arr[0] >= 51) {this.setState({status: 'Moderate'})}
                if (arr[0] <50 ) {this.setState({status: 'Healthy'})}
            }
        })
    }

    componentDidMount(){
        this.fetchData()
    }
    render(){
        return(
            <Container>
                <View style={styles.container}>
                    <MapView style={styles.map}
                        initialRegion={{
                        latitude: this.state.lat,
                        longitude: this.state.long,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                        
                    >
                        <Marker
                            coordinate={{latitude: 12.923604, longitude:77.4964626}}
                            title={"Test"}
                            description={"Test"}
                        />

                        <Circle
                        center={{latitude: 12.923604, longitude:77.4964626}}
                        radius={1000}
                        strokeWidth={0}
                        fillColor='#E63B2E25'
                        />
                    </MapView>
                </View>
                <Card>
                    <Item regular>
                        <Icon active name='search'/>
                        <Input placeholder='Search Place...' />
                    </Item>
                </Card>
                <View style={{flex:1, justifyContent:'flex-end',marginBottom:70,marginHorizontal:3}}>
                    <Card style={{borderRadius: 50}}>
                        <CardItem>
                            <Body>
                                <Text style={[s.f5,s.fw6]}>Air Quality Index</Text>
                                <Text style={[s.f6,s.fw1]}>{'Average : 417.3'}</Text>
                                <Text style={[s.f6,s.fw1,s.mb2]}>{'Current :'+this.state.aqis[0]}</Text>
                                <Text style={[s.f5,s.fw6]}>Quality of Air</Text>
                                <Text style={[s.f6,s.fw1,s.mb2]}>{this.state.status}</Text>
                            </Body>
                        </CardItem>
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