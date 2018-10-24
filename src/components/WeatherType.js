import React, {Component} from 'react';
import {StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import {Container} from 'native-base'

export default class WeatherType extends Component{
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.isLoading){
      return(
        <ActivityIndicator size="large" color="white" animating={this.props.isLoading}
          style={styles.spinner}
        />
      )
    }
    return (
      <Container style={styles.container}>
        <Text style={styles.Condition}>{this.props.text}</Text>
        <Image source={{uri:`http:${this.props.icon}`}} style={styles.icon}/>
        <Text style={styles.typesun}>{this.props.maxtemp_c}°C</Text>
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
  },
  Condition:{
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  },
  icon:{
    backgroundColor:'transparent',
    marginTop:10,
    width:'30%',
    height:'30%'
  },
  typesun:{
    marginTop:15,
    color:'white',
    fontSize:35,
    fontWeight:'bold'
  },
  spinner:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'transparent'
  }
})
