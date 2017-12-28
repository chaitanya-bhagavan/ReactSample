import React, { Component } from 'react';
import * as nb from 'native-base'
import { View, Dimensions, Image, StyleSheet, Text, StatusBar, TouchableOpacity, } from 'react-native';
import Logo from '../components/logo';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signupUser, emailChanged,passwordChanged,nameChanged,confirmPasswordChanged } from '../actions/AuthActions'
import { Spinner } from '../components/Spinner'

const { width, height } = Dimensions.get("window");

class Signup extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            check: false
        }
    }
    onNameChange(text){
        //Pass to nameChanged AuthActions
        this.props.nameChanged(text)
    }
    onEmailChange(text){
        //Pass to nameChanged AuthActions
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        //Pass to nameChanged AuthActions
        this.props.passwordChanged(text)
    }
    onConfirmPasswordChange(text){
        //Pass to nameChanged AuthActions
        this.props.confirmPasswordChanged(text)
    }
    onSignup(){
        // pass the signup creds to AuthActions.signupUser
            console.log(this.props)
            if(this.props.password === this.props.confirmPassword){
                const { email, password, name, confirmPassword } = this.props
                this.props.signupUser( { name, email, password, confirmPassword } )
                }
    }
    renderErrorMessage(){
        if(this.props.confirmPassword){
            if (this.props.password !== this.props.confirmPassword){
               return(
                <nb.Icon style={styles.errorIcon} name='ios-close-circle-outline' />
               );
            }
            return (
                <nb.Icon style={styles.successIcon} name='ios-checkmark-circle-outline' />                
            );
        }
    }
    renderButton(){
        // render the components if LOGIN_USER or LOGIN_USER_SUCCESS or LOGIN_USER_ERROR from AuthActions.loginUser
         if (this.props.loading) {
            return <Spinner size="large" />;
         }
        return( 
            <nb.Button style={styles.btn2} onPress = {this.onSignup.bind(this)}  >
                 <Text style={styles.btn2Text} >Sign Up</Text>
            </nb.Button>
        );
    }

    render() {
        const { name, email, password, confirmPassword, check } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <nb.Container style={{ flex: 1 }} >
                <StatusBar hidden={true} />
                <Image source={require('../images/background.png')} style={{ height, width }} />
                <View style={styles.mainContainer} >
                    <Text style={styles.headerText} >V 0.01</Text>
                    <View style={styles.logo} >
                        <Logo />
                    </View>
                    <View style={{ flex: 4 }} >
                        <nb.Content>
                            <nb.Form style={styles.form} >
                                <nb.Item style={styles.formItems}>
                                    <nb.Input onChangeText={this.onNameChange.bind(this)} value={this.props.name} style={styles.itemsInput} type="text" placeholder="Username" placeholderTextColor="#ebebeb" />
                                </nb.Item>
                                <nb.Item style={styles.formItems}>
                                    <nb.Input onChangeText={this.onEmailChange.bind(this)} value={this.props.email} style={styles.itemsInput} type="text" placeholder="Email" placeholderTextColor="#ebebeb" />
                                </nb.Item>
                                <nb.Item style={styles.formItems}>
                                    <nb.Input onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} secureTextEntry={true} style={styles.itemsInput} type="text" placeholder="Password" placeholderTextColor="#ebebeb" />
                                
                                </nb.Item>
                                <nb.Item style={styles.formItems}>
                                    <nb.Input onChangeText={this.onConfirmPasswordChange.bind(this)} value={this.props.confirmPassword} secureTextEntry={true}  style={styles.itemsInput} type="text" placeholder="Confirm Password" placeholderTextColor="#ebebeb" />
                                    {this.renderErrorMessage()}
                                </nb.Item>
                                <Text style={styles.errorTextStyle}>
                                    {this.props.error}
                                </Text>
                                <View style={styles.checkContainer} >
                                    {
                                        check ? <nb.Icon style={styles.check} onPress={() => this.setState({ check: !check })} name='ios-checkbox-outline' />
                                            : <nb.Icon style={styles.check} onPress={() => this.setState({ check: !check })} name='ios-square-outline' />
                                    }
                                    <Text style={styles.checkText} >By signing up, you agree to the Terms & Conditions.</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.btn1} onPress={() => console.log(this.props)}>
                                        <Text style={styles.btn1Text} >Skip >></Text>
                                    </TouchableOpacity>
                                    {this.renderButton()}
                                    <View style={styles.btn2Child} >
                                        <Text style={styles.btn2Text1} >Have an Account? </Text>
                                        <TouchableOpacity onPress={() => Actions.login()} >
                                            <Text style={styles.btn3Text} > Sign In </Text>
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
    },
    errorIcon: {
        color: 'red'
    },
    successIcon: {
        color: 'green'
    }
})

//mapStateToProps Will Update The props Value From The State and Connects the updated props to the React component

const mapStateToProps = ( {auth} ) => {

    const { email, name, password, confirmPassword, loading, error, passwordMatchError } = auth

    return { email, name, password, confirmPassword, loading, error, passwordMatchError }

}

export default connect(mapStateToProps,{
  emailChanged,
  nameChanged,
  passwordChanged,
  confirmPasswordChanged,
  signupUser
}
)(Signup);