import React,{Component} from "react";
import {View,Text, ImageBackground, Dimensions} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const windowWidth=Dimensions.get('window').width;

class Category extends Component{
    constructor(props){
        super(props);

        this.state={
            currentName: '',
            currentIndex: 0
        }
    }

    getSubCategories = (categoryName) => {
        var subCategories = require(`../json/category-${categoryName.toLowerCase()}.json`);
        return subCategories;
    }

    renderSubCategories = (categoryName) => {
        var subCategories = this.getSubCategories(categoryName);
        return (
            subCategories.map((category, index) => {
                return(
                    <Text onPress={
                        ()=> this.setState({
                            currentName: category,
                            currentIndex: index
                        }) }
                        style={{paddingLeft:5, paddingRight:5, color:this.state.currentIndex==index?"white":"black"}}>{category}</Text>
                )
            })
        )
    }

    getProductsList = (categoryName, subCategoryName) => {
        var subCategories = require(`../json/product-${categoryName.toLowerCase()}-${subCategoryName.toLowerCase()}.json`);
        return subCategories
    }

    renderProductList = (categoryName) => {
        var subCategories = this.getSubCategories(categoryName);

        var subCategoryName = subCategories[0];
        
        if(this.state.currentName != '') {
            subCategoryName = this.state.currentName;
        }
        var products = this.getProductsList(categoryName, subCategoryName)

        return(
            products.map((product, index) => {
                return(
                    <TouchableOpacity>
                        <ImageBackground source={product.imageUri}  
                        style={{
                            height:200,
                            width:windowWidth,
                            paddingLeft:wp('10%'),
                            paddingTop:hp('5%')
                        }}>

                            <View style={{paddingBottom:hp('5%')}}>
                                <Text style={{fontSize:30,fontWeight:'bold'}}>{product.name}</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                )
            })
        )
    }

    render(){
        const {categoryName} =  this.props.route.params;
        return(
            <View>
                <View style={{backgroundColor: 'grey', color: 'black', paddingTop: 10, paddingBottom: 10 }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {
                        this.renderSubCategories(categoryName)
                    }
                    </View>
                </View>
                <View>
                    {
                        this.renderProductList(categoryName)
                    }
                </View>
            </View>
        )
    }
}

export default Category;