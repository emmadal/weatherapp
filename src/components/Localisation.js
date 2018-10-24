import React, {Component} from 'react';
import {StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Container,Spinner, Icon} from 'native-base'


export default class Localisation extends Component{
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
  },
  icons:{
    color:'white',
    fontSize:80
  },
  textCity:{
    color:'white',
    fontSize:35,
    fontWeight:'bold'
  },
  textCountry:{
    color:'white',
    fontSize:30
  },
  textregion:{
    color:'white',
    fontSize:25
  },
  spinner:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'transparent'
  }
})
