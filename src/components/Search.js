import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import {Container, Item, Input, Content, Button, Icon, Spinner} from 'native-base'
import Localisation from '../components/Localisation'
import WeatherType from '../components/WeatherType'
import axios from 'axios'

export default class Search extends Component{
  constructor(props){
    super(props)
    this.state={
      mycity:'',
      city:'',
      country:'',
      region:'',
      textcondition:'',
      isLoading:false,
      error:'',
      ic:'',
      arraylocation:[],
      arraycurrent:[]
    }
    this._Search = this._Search.bind(this)
  }
  async _Search(){
    const arraylocation = []
    const arraycurrent = []
    try {
      const res = await axios.get(`https://api.apixu.com/v1/forecast.json?key=6374bda99ff940cd814182449182210&q=${this.state.mycity}`)
      arraylocation.push(res.data.location)
      this.setState({arraylocation})
      arraylocation.map((text) =>{
        this.setState({
          city:text.name,
          country:text.country,
          region:text.region
        })
      })
      arraycurrent.push(res.data.current.condition)
      this.setState({arraycurrent})
      arraycurrent.map((text) =>{
        this.setState({
          textcondition:text.text,
          ic:text.icon,
        })
      })
      console.log(res.data)
    } catch(e){
      this.setState({error:e.message})
      alert(this.state.error)
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
              region={this.state.region}
            />

          </Container>
          <WeatherType textcondition={this.state.textcondition}
            ic={this.state.ic}
          />
          <WeatherType textcondition={this.state.textcondition}
            ic={this.state.ic}
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
  }
})
