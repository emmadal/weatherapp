import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Container} from 'native-base'

export default class WeatherDetails extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.Condition}>{this.props.textcondition}</Text>
        <Image source={{uri:`http:${this.props.ic}`}} style={styles.icon}/>
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
  Condition:{
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  },
  icon:{
    backgroundColor:'transparent',
    margin:15,
    width:'30%',
    height:'30%'
  }
})
