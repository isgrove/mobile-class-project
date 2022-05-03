import React,{Component} from "react";
import {View,Text,Image,Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Icon from '@expo/vector-icons/Ionicons';

const {width}=Dimensions.get("window");

class ProductDetail extends Component{
    render(){

        console.log(this.props.route.params);

        const{id,name,imageUri,priceOne,priceTwo}= this.props.route.params;
        return(
            <View style={{flex:1}}>
               <View>
                   <Text style={{fontSize:26, fontWeight:'bold',paddingLeft:10}}>{name}</Text>
              </View> 
              <View>
                  <Image source={{uri:imageUri}} style={{flex:1,resizeMode:"stretch",width:width,height: hp("65%") }}></Image>
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,marginBottom:15,
              paddingLeft:10,paddingRight:10}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{fontSize:20,fontWeight:'bold'}}>${priceOne}</Text>
                      <Text style={{fontSize:18,marginLeft:10,textDecorationLine:'line-through'}}>{priceTwo}</Text>
                  </View>
                  <View  style={{width:wp("45%"),paddingTop:10,paddingBottom:10,backgroundColor:'black',color:'white',
                  borderRadius:2,flexDirection:'row',alignItems:'center'}}>
                      <View style={{paddingLeft:10,paddingRight:10}}>
                          <Icon name="md-cart" color="white" size={24}></Icon>
                      </View>
                      <View>
                           <Text style={{color:'white',fontSize:18}}>Add to Cart</Text>
                      </View>
                  </View>
              </View>
              <View style={{paddingLeft:10,paddingRight:10}}>
                  <Text style={{fontSize:16,fontWeight:'bold'}}>Description: </Text>
                  <Text style={{fontSize:16}}>This is dummy descrition content.This is dummy descrition content.
                      This is dummy descrition content.This is dummy descrition content.
                      This is dummy descrition content.This is dummy descrition content.This is dummy descrition content.
                      This is dummy descrition content.</Text>
                  
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',
              marginTop:10,marginBottom:10,paddingLeft:10,paddingRight:10}}>
                  <View>
                      <Text style={{fontSize:18,fontWeight:'bold'}}>Available Colors</Text>
                      <View style={{flexDirection:'row',marginTop:5}}>
                          <View style={{backgroundColor:'black',width:wp("5%"),height:wp("5%"),marginRight:5}}></View>
                          <View style={{backgroundColor:'red',width:wp("5%"),height:wp("5%"),marginRight:5}}></View>
                          <View style={{backgroundColor:'yellow',width:wp("5%"),height:wp("5%"),marginRight:5}}></View>
                      </View>
                  </View>
                  <View>
                      <Text style={{fontSize:18,fontWeight:'bold',marginBottom:5}}>Available Sizes</Text>
                      <Text style={{fontSize: 14,fontWeight:'bold'}}>S,M,L</Text>
                  </View>
              </View>
            </View>
        )
    }
}

export default ProductDetail;