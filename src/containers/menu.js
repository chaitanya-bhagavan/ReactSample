import React, { Component } from 'react';
import * as nb from 'native-base'
import { View, Dimensions, Image, StyleSheet, Text, StatusBar, TouchableOpacity, } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code


const { width, height } = Dimensions.get("window");

class Menu extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
           
        }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <nb.Container style={{ flex: 1 }} >
                <StatusBar hidden={true} />
                <Image source={require('../images/background.png')} style={{ height, width }} />
                <View style={styles.mainContainer} >
                    <Text style={styles.headerText} >V 0.01</Text>
                    <View style={styles.logo} >
                    </View>
                    <View style={{ flex: 4 }} >
                        <nb.Content style={{marginTop: '25%'}} >
                         <TouchableOpacity onPress={() => Actions.LandingPage()} >
                             <Text style={styles.text} >Home</Text>
                         </TouchableOpacity>   
                         <TouchableOpacity>
                             <Text style={styles.text} >Products</Text>
                         </TouchableOpacity>   
                         <TouchableOpacity>
                             <Text style={styles.text} >About Us</Text>
                         </TouchableOpacity>   
                         <TouchableOpacity  onPress={() => Actions.login()}>
                             <Text style={styles.text} >Log Out</Text>
                         </TouchableOpacity>   
                        </nb.Content>
                    </View>
                </View>
            </nb.Container>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    headerText: {
        color: '#f7f8f8',
        alignSelf: 'flex-end',
        paddingTop: '6%',
        paddingRight: '4%',
        fontSize: 13
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        fontFamily: 'Montserrat-ExtraLight',
        color: 'white', 
        fontSize: 23, 
        alignSelf: 'center',
        marginTop: '3%'
    }
    
})

export default Menu;