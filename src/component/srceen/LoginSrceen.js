import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header, Card, CardSection, Button, Input} from '../common/index'

export default class LoginSrceen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }
    render() {
        return (
            <Card>
                <Header headerText='Login'/>
                <CardSection>
                    <Input  
                        label="Email"
                        value={this.state.email}
                        onChangeText={(email)=>{
                            this.setState(()=>{
                                return{
                                    email: email
                                }
                            })
                        }}></Input>
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.password}
                        onChangeText={(password)=>{
                            this.setState(()=>{
                                return{
                                    password: password
                                }
                            })
                        }}></Input>
                </CardSection>

                <CardSection>
                    <Button
                        children="Sign In"
                        onPress={()=>{
                            this.props.navigation.navigate('DrawerHome')
                        }}>
                    </Button>
                </CardSection>

                <CardSection>
                    <Button 
                        children="Register"
                        onPress={()=>{
                            this.props.navigation.navigate('RegisterSrceen')
                        }}/>
                </CardSection>
            </Card>
        )
    }
}
