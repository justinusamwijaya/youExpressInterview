import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, Card, CardSection, ScreenSection } from './common'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  reducers from '../reducers'
import ContactInfo from './ContactInfo.js'
import RadioForm from 'react-native-simple-radio-button';


export default class UI extends Component{
    static navigationOptions = {
        title: "Confirm Order"
    };
  render() {
    return (
        <Provider store={reducers}>
        <ScrollView>
            <View>
                <Card style={{ marginBottom:20 }}>
                    <CardSection>
                        <View style={{ justifyContent:"center",flexDirection:"column",height: 30 }}>
                            <Text>Your Package Photo</Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection style={{ borderBottomWidth: 0 }}>
                        <View>
                            <Text>
                                Enter contact number (sender and receiver) and note for the driver.
                            </Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <ContactInfo address="Some Address" style={{ width: "100%"}} id={1}>Sender</ContactInfo>
                    </CardSection>
                    <CardSection>
                        <ContactInfo address="Some Address" style={{ width: "100%" }} id={2}>Receiver 1</ContactInfo>
                    </CardSection>
                    <CardSection>
                        <ContactInfo address="Some Address" style={{ width: "100%" }} id={3}>Receiver 2</ContactInfo>
                    </CardSection>
                </Card>
            <ScreenSection style={{ marginTop: 20, backgroundColor:"white" }}>
                <CardSection style={{ borderBottomWidth: 0, width: "90%", marginLeft: "5%" }}>
                        <Text style={{ width:"50%" }}>
                            Price
                        </Text>
                        <Text style={{ width:"50%", textAlign: "right" }}>
                            IDR 200000
                        </Text>
                </CardSection>
                <CardSection style={{ width: "90%", marginLeft: "5%" }}>
                    <Text style={{ width:"50%" }}>
                            Door to door payment
                    </Text>
                    <Text style={{ width:"50%", textAlign: "right" }}>
                        IDR 15000
                    </Text>
                </CardSection>
                <CardSection style={{ borderBottomWidth:0, marginBottom: 10, width: "90%", marginLeft: "5%" }}>
                    <Text style={{ color:"purple", fontWeight:"bold", fontSize: 16, width:"50%" }}>
                        Total Payment
                    </Text>
                    <Text style={{ color:"purple", fontWeight:"bold", fontSize: 25, width:"50%", textAlign:"right" }}>
                        IDR 215000
                    </Text>
                </CardSection>
                <CardSection style={{ borderTopWidth: 1, borderBottomWidth: 0 }}>
                    <Text>
                        Responsible for payment
                    </Text>
                </CardSection>
                <CardSection style={{ marginBottom: 5 }}>
                    <RadioForm
                    radio_props={[
                        {label: 'Sender', value: 0 },
                        {label: 'Receiver', value: 1 }
                    ]}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                    formHorizontal={true}
                    buttonSize = {10}
                    labelStyle={{marginRight: 20}}
                    />
                </CardSection>
                <CardSection style={{ borderBottomWidth: 0 }}>
                    <Text>Pay with</Text>
                </CardSection>
                <CardSection style={{ borderBottomWidth: 0 }}>
                <RadioForm
                    radio_props={[
                        {label: 'Cash', value: 0 },
                        {label: 'Wallet', value: 1 },
                        {label: 'Billed', value: 2 }
                    ]}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                    formHorizontal={true}
                    buttonSize = {10}
                    labelStyle={{marginRight: 20}}
                    />
                </CardSection>
                <CardSection>
                    <Button
                    style={{ marginBottom: 20 }}
                    onPress={() => this.props.navigation.navigate('PickupLocation')}>
                        Order
                    </Button>
                </CardSection>
            </ScreenSection>
            </View>
        </ScrollView>
        </Provider>
    );
  }
}