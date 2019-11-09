import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, Card, CardSection, Button, Input } from '../common/index'

export default class RegisterSrceen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            name: null,
            phoneNumber: null
        }
    }
    render() {
        return (
            <Card>
                <Header headerText='Register'/>
                
                    <CardSection>
                        <Input label='Email'
                                value= {this.state.email}
                                onChangeText={(email)=>{
                                    this.setState(()=>{
                                        return{
                                            email: email
                                        }
                                    })
                                }}
                        />
                    </CardSection>

                
                    <CardSection>
                        <Input label='Password'
                                value={this.state.password}
                                onChangeText={(password)=>{
                                    return{
                                        password: password
                                    }
                                }}
                        />
                    </CardSection>
                

                
                    <CardSection>
                        <Input label='Name'
                                value={this.state.name}
                                onChangeText={(name)=>{
                                    this.setState(()=>{
                                        return{
                                            name: name
                                        }
                                    })
                                }}
                        />
                    </CardSection>
                
                    <CardSection>
                        <Input label= 'Phone number'
                                value={this.state.name}
                                onChangeText={(phoneNumber)=>{
                                    this.setState(()=>{
                                        return{
                                            phoneNumber: phoneNumber
                                        }
                                    })
                                }}
                        />
                    </CardSection>
                
                    <CardSection>
                        <Button children='Register'
                            onPress={()=>{
                                this.props.navigation.navigate('loginSrceen')
                            }}
                        />
                    </CardSection>
                

                
                    <CardSection>
                        <Button children='Login'/>
                    </CardSection>
            </Card>
            
        )
    }
}
