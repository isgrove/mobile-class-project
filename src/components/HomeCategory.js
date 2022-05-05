import React,{Component} from "react";
import {View,Text,ImageBackground,Dimensions, TouchableOpacity} from "react-native";


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const windowWidth=Dimensions.get('window').width;


class HomeCategory extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Category",{categoryName:this.props.titleFirst})}>
                    <ImageBackground source={{uri:this.props.imageUri}} 
                    style={{
                        height:200,
                        width:windowWidth,
                        paddingLeft:wp('10%'),
                        paddingTop:hp('5%')
                    }}>

                        <View style={{paddingBottom:hp('5%')}}>
                            <Text style={{fontSize:30,fontWeight:'bold'}}>{this.props.titleFirst}</Text>
                            <Text style={{fontSize:30,fontWeight:'bold'}}>{this.props.titleSecond}</Text>
                        </View>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>{this.props.subTitle}</Text>

                    </ImageBackground>
                </TouchableOpacity>
               
               
            </View>
        )
    }
}

export default HomeCategory;