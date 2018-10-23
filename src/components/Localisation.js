import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container,Spinner, Icon} from 'native-base'


export default class Localisation extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Container style={styles.container}>
        <Icon type="FontAwesome" name="map-marker" style={styles.icons}/>
        <Text style={styles.textCity}>{this.props.city}</Text>
        <Text style={styles.textCountry}>{this.props.country}</Text>
        <Text style={styles.textregion}>{this.props.region}</Text>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:"transparent",
    borderColor:'white',
    borderWidth:1
  },
  icons:{
    color:'white',
    fontSize:100
  },
  textCity:{
    color:'white',
    fontSize:40,
    fontWeight:'bold'
  },
  textCountry:{
    color:'white',
    fontSize:30
  },
  textregion:{
    color:'white',
    fontSize:20
  }
})
