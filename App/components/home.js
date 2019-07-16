/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Nav from './global-widgets/nav'
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';


var image1 = require('../images/image1.jpeg')
var image2 = require('../images/image2.jpeg')
var image3 = require('../images/image3.jpeg')
var image4 = require('../images/image4.jpeg')
var image5 = require('../images/image5.jpeg')
var image6 = require('../images/image6.jpeg')
var image7 = require('../images/image7.jpeg')
var image8 = require('../images/image8.jpeg')
var image9 = require('../images/image9.jpeg')
var image10 = require('../images/image10.jpeg')
var image11 = require('../images/image11.jpeg')
var image12 = require('../images/image12.jpeg')
var image13 = require('../images/image13.jpeg')

const Cards = [{
  "id": 1,
  "first_name": "慕灵",
  "age": 21,
  "friends": 9,
  "interests": 38,
  "image": image1
}, {
  "id": 2,
  "first_name": "凝天",
  "age": 27,
  "friends": 16,
  "interests": 49,
  "image": image2
}, {
  "id": 3,
  "first_name": "曼香",
  "age": 29,
  "friends": 2,
  "interests": 39,
  "image": image3
}, {
  "id": 4,
  "first_name": "惜雪",
  "age": 20,
  "friends": 18,
  "interests": 50,
  "image": image4
}, {
  "id": 5,
  "first_name": "春雁",
  "age": 28,
  "friends": 2,
  "interests": 13,
  "image": image5
}, {
  "id": 6,
  "first_name": "幻珊",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image6
}, {
  "id": 7,
  "first_name": "Anna",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image7
}, {
  "id": 8,
  "first_name": "访琴",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image8
}, {
  "id": 9,
  "first_name": "夏槐",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image9
}, {
  "id": 10,
  "first_name": "含烟",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image10
}, {
  "id": 11,
  "first_name": "凌瑶",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image11
}, {
  "id": 12,
  "first_name": "Anna",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image12
}, {
  "id": 13,
  "first_name": "怀萍",
  "age": 24,
  "friends": 12,
  "interests": 44,
  "image": image13
}]

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards: Cards
    }
  }
  Card(x){
    return (
      <View style={styles.card}>
        <Image source ={x.image} resizeMode="contain" style ={{width:350, height:350}} />
        <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', margin:15, marginTop:25,}} >
        <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{x.first_name}, </Text>
        <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{x.age}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{padding:13,  borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='people-outline' size={20} color="#777" style={{}} /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{x.friends}</Text></View>
        <View style={{padding:13, borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='import-contacts' size={20} color="#777" /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{x.interests}</Text></View>
        </View>
        </View>
      </View>
    )
  }
    handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  noMore(){
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

nope(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

  render() {
    return (
      <View style={styles.container}>
           <Nav chat = {() => this.props.navigator.replace({id: "messages"})} toProfile = {() => this.props.navigator.replace({id:'profile'})} />
      <SwipeCards
        ref = {'swiper'}
        cards={this.state.cards}
        containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
        renderCard={(cardData) => this.Card(cardData)}
        renderNoMoreCards={() => this.noMore()}
        handleYup={this.handleYup}
        handleNope={this.handleNope} />
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style = {styles.buttons} onPress = {() => this.nope()}>
        <Iconz name='ios-close' size={45} color="#888" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonSmall}>
        <Iconz name='ios-information' size={25} color="#888" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttons} onPress = {() => this.yup()}>
        <Iconz name='ios-heart-outline' size={36} color="#888" style={{marginTop:5}} />
        </TouchableOpacity>
        </View>
        </View>
    )
}
}
//onPress = {() => this.renderNope()}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f7f7f7',
  },
  buttons:{
    width:80,
    height:80,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
  },
  buttonSmall:{
    width:50,
    height:50,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  }

});
