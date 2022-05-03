import React,{Component} from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ProductItem extends Component{
    render(){
        const {id,imageUri,name,priceOne,priceTwo,onPress}=this.props;
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={{width:wp("42%"),marginTop:10,marginLeft:10,marginRight:10}}>
                    <View style={{width:wp("42%"),height:wp("50%")}}>
                        <Image source={{uri:imageUri}} style={{flex:1}} />
                    </View>
                    <View><Text style={{fontSize:18,fontWeight:'bold'}}>{name}</Text></View>
                    <View style={{flexDirection:"row", alignItems:'center'}}>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>${priceOne}</Text>
                        <Text style={{fontSize:12,paddingLeft:10,textDecorationLine:"line-through"}}>{priceTwo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProductItem;