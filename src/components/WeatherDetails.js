import React, {Component} from 'react';
import {StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Container, Icon} from 'native-base'

export default class WeatherDetails extends Component{
  constructor(props){
    super(props)
    this.state={
      dateTime:''
    }
  }

  componentWillMount(){
    setInterval(() =>{
      const dateTime= Date()
      this.setState({dateTime})
    },1000)
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
        <Text style={styles.typesun}>Humidity : {this.props.humidity} <Icon type="FontAwesome"
          name="tint" style={styles.icon}/>
        </Text>
        <Text style={styles.typesun}>Wind Degree : {this.props.wind_degree}</Text>
        <Text style={styles.typesun}>Speed Wind : {this.props.wind_kph} Kph</Text>
        <Text style={styles.typesun}>Last Updated : {this.props.last_updated} <Icon
          type="FontAwesome" name="clock-o" style={styles.icon}/>
        </Text>
        <Text style={styles.time}>{this.state.dateTime}</Text>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    backgroundColor:"transparent",
  },
  typesun:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    flexDirection:'column',
    marginLeft:30
  },
  icon:{
    backgroundColor:'transparent',
    margin:15,
    width:'40%',
    height:'40%',
    color:'white',
  },
  time:{
    color:'white',
    fontSize:25,
    marginLeft:30,
    fontWeight:'bold'
  },
  spinner:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'transparent'
  }
})
