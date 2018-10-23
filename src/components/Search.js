import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, } from 'react-native';
import {Container, Item, Input, Content, Button, Icon} from 'native-base'

export default class Search extends Component{
  constructor(props){
    super(props)
    this.state={
      mycity:''
    }
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../img/galaxy.jpg')}
      >
        <Content>
          <Item rounded style={styles.inputBox}>
            <Input
              placeholder='Enter your city here...'
              style={styles.inputText}
              placeholderTextColor='white'
              selectionColor='white'
            />
          </Item>
          <Button bordered light rounded style={styles.btn}>
            <Text style={styles.btnText}>Search</Text>
            <Icon type="FontAwesome" name="search" style={{color:'white'}}/>
          </Button>
        </Content>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  inputBox:{
    margin:20,
  },
  inputText:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    margin:10
  },
  btn:{
    margin:15,
    width:'40%',
    height:'30%'
  },
  btnText:{
    color:'white',
    justifyContent:"center",
    textAlign:'center',
    marginLeft:80,
    fontWeight:"bold"
  }
})
