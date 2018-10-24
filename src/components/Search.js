import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, ActivityIndicator, Alert} from 'react-native';
import {Container, Item, Input, Content, Button, Icon} from 'native-base'
import Localisation from '../components/Localisation'
import WeatherType from '../components/WeatherType'
import WeatherDetails from '../components/WeatherDetails'
import axios from 'axios'

export default class Search extends Component{
  constructor(props){
    super(props)
    this.state={
      mycity:'',
      city:'',
      country:'',
      region:'',
      text:'',
      isLoading:false,
      error:'',
      icon:'',
      maxtemp_c:0,
      wind_kph:0,
      humidity:0,
      last_updated:'',
      wind_degree:0,
      arraylocation:[],
    }
    this._Search = this._Search.bind(this)
  }
  async _Search(){

    const arraylocation = []
    const arraycurrent = []
    const arrayforecast = []
    try {
      this.setState({isLoading:true})
      const res = await axios.get(`https://api.apixu.com/v1/forecast.json?key=6374bda99ff940cd814182449182210&q=${this.state.mycity}`)
      res.status == 200 ? this.setState({isLoading:false}) : this.setState({isLoading:false})
      arraylocation.push(res.data.location)
      this.setState({arraylocation})
      arraylocation.map((text) =>{
        this.setState({
          city:text.name,
          country:text.country,
          region:text.region
        })
      })
      const {wind_kph, humidity, wind_degree, last_updated, last_updated_epoch} = res.data.current
      const {maxtemp_c} = res.data.forecast.forecastday[0].day
      const {text, icon } = res.data.forecast.forecastday[0].day.condition
      this.setState({wind_kph,humidity,text, icon, maxtemp_c, wind_degree, last_updated})
    } catch(e){
      this.setState({error:e.message})
      Alert.alert(
        'Error Getting Weather',
        `${this.state.error}`,
        [{text:'Try again'}],
        {cancelable:false}
      )
    }
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../img/galaxy.jpg')}
      >
          <Item rounded style={styles.inputBox}>
            <Input
              placeholder='Enter your city here...'
              style={styles.inputText}
              placeholderTextColor='white'
              selectionColor='white'
              autoCapitalize="none"
              onChangeText={(mycity)=>this.setState({mycity})}
            />
          </Item>
          <Button bordered light rounded style={styles.btn}
              onPress={this._Search}
            >
            <Text style={styles.btnText}>Search</Text>
            <Icon type="FontAwesome" name="search" style={{color:'white'}}/>
          </Button>
          <Container style={{backgroundColor:'transparent'}}>
            <Localisation city={this.state.city} country={this.state.country}
              region={this.state.region} temp_c={this.state.temp_c} isLoading={this.state.isLoading}
            />

          </Container>
          <WeatherType text={this.state.text}
            icon={this.state.icon} maxtemp_c={this.state.maxtemp_c} isLoading={this.state.isLoading}
          />
          <WeatherDetails wind_kph={this.state.wind_kph} humidity={this.state.humidity}
            wind_degree={this.state.wind_degree} last_updated={this.state.last_updated} isLoading={this.state.isLoading}
          />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  inputBox:{
    margin:10,
  },
  inputText:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    margin:10
  },
  btn:{
    margin:5,
    width:'40%',
    height:'5%'
  },
  btnText:{
    color:'white',
    justifyContent:"center",
    textAlign:'center',
    marginLeft:80,
    fontWeight:"bold"
  },
})
