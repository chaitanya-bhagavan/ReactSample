import React, { Component } from 'react';
import * as nb from 'native-base'
import { View, Dimensions, Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { connect } from 'react-redux';
import axios from 'axios';
import { AsyncStorage }  from 'react-native';
import {reduxForm, Field } from 'redux-form';

import { emailChanged, passwordChanged, loginUser } from '../actions'

const { width, height } = Dimensions.get("window");

// class renderInput extends Component {
//     render() {
//         const {input: {value}, onChange, }
//     }
// }

// class TestForm extends Component {
//     render() {
//         return (
//             <View>
//                 <TextInput />
//             </View>
//         )
//     }
// }

const Form1 = reduxForm({form: 'TestForm'});

class Login extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        name: '',
        password: '',
        check: false
    }

    constructor(props) {
        super(props);
    }
    onEmailChange(text){
        // Pass the email value to the AuthActions.emailChanged on onEmailChange()
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        // Pass the password value to the AuthActions.passwordChanged on onPasswordChange()        
        this.props.passwordChanged(text)
    }
    onButtonLogin(){
        //Pass the email And Password to the AuthActions.loginUser
        const { email, password } = this.props
        this.props.loginUser( { email, password } );
        
    }
    componentWillMount(){
        AsyncStorage.getItem('jwt')
        .then((val)=>{
            console.log("my jwt In login ", val)
        })
    }
    renderButton(){
        // render the components if LOGIN_USER or LOGIN_USER_SUCCESS or LOGIN_USER_ERROR from AuthActions.loginUser
         if (this.props.loading) {
         }
        return( 
            <nb.Button style={styles.btn2}  onPress={this.onButtonLogin.bind(this)} >
                <Text style={styles.btn2Text} > Login </Text>
            </nb.Button>
        );
    }
    render() {
        
        const { name, password, check } = this.state;
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
                        <nb.Content>
                            <nb.Form style={styles.form} >
                                <nb.Item style={styles.formItems}>
                                    <nb.Input onChangeText={this.onEmailChange.bind(this)}  value={this.props.email} style={styles.itemsInput} type="text" placeholder="Username" placeholderTextColor="#ebebeb" />
                                </nb.Item>
                                <nb.Item style={styles.formItems}>
                                    <nb.Input onChangeText={this.onPasswordChange.bind(this)}  value={this.props.password} style={styles.itemsInput} type="text" placeholder="Password" placeholderTextColor="#ebebeb" />
                                </nb.Item>
                                <Text style={styles.errorTextStyle}>
                                    {this.props.error}
                                </Text>
                                <View style={styles.checkContainer} >
                                    {
                                        check ? <nb.Icon style={styles.check} onPress={() => this.setState({ check: !check })} name='ios-checkbox-outline' />
                                            : <nb.Icon style={styles.check} onPress={() => this.setState({ check: !check })} name='ios-square-outline' />
                                    }
                                    <Text style={styles.checkText} >Remember Me</Text>
                                    <TouchableOpacity style={styles.checkText1} >
                                        <Text style={styles.checkText} >Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.btn1} onPress={() =>  Actions.Menu()} >
                                        <Text style={styles.btn1Text}  > Skip >> </Text>
                                    </TouchableOpacity>
                                    <View>
                                    {this.renderButton()}
                                    </View>
                                    
                                    <View style={styles.btn2Child} >
                                        <Text style={styles.btn2Text1} >Need an Account? </Text>
                                        <TouchableOpacity onPress={() => Actions.SignUp()} >
                                            <Text style={styles.btn3Text} > Sign Up </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </nb.Form>
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
    form: {
        paddingTop: '5%',
        width: '94%',
        marginHorizontal: '2%'
    },
    formItems: {
        paddingLeft: '1%',
        marginTop: '5%',
        marginHorizontal: '2%',
        borderBottomColor: 'rgba(255,255,255,.5)'
    },
    itemsInput: {
        fontFamily: "Montserrat-Light",
        color: '#ebebeb',
        fontSize: 15
    },
    checkContainer: {
        flexDirection: 'row',
        padding: '5%',
        paddingLeft: '6%'
    },
    check: {
        fontSize: 15,
        color: 'rgba(247,248,248,.6)'
    },
    checkText: {
        marginLeft: '3%',
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        fontSize: 11,
    },
    checkText1: {
        flex: 1,
        alignItems: 'flex-end'
    },
    btn1: {
        alignItems: 'center',
        marginTop: '5%'
    },
    btn1Text: {
        fontFamily: 'Montserrat-Regular',
        color: 'white'
    },
    btn2: {
        backgroundColor: '#237cd4',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: '3%'
    },
    btn2Child: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '2%'
    },
    btn2Text: {
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    btn2Text1: {
        fontFamily: 'Montserrat-Light',
        color: 'white',
        fontSize: 12
    },
    btn3Text: {
        fontFamily: 'Montserrat-Light',
        color: '#237cd4',
        fontSize: 12,
    },
    errorTextStyle: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'red'
      }
})

const mapStateToProps = ({auth}) => {
    const { email, password, error, loading, user } = auth
    return { email, password, error , loading, user }
};

export default connect( mapStateToProps, { 
    emailChanged,
    passwordChanged,
    loginUser,
})(Login);