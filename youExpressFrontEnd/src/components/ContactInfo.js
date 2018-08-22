import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.id
    return {
        expanded
    }
}

export default connect(mapStateToProps, actions) (
class ContactInfo extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring()
    }
    
    renderDescription() {
        if(this.props.expanded) {
            return(
                <View style={{ width: "90%", marginLeft: "5%" }}>
                    <CardSection style={{ marginBottom: 10 }}>
                        <TextInput style={{ height: 20, fontSize: 16 }} placeholder="Name"/>
                    </CardSection>    
                    <CardSection style={{ marginBottom: 10 }}>
                        <TextInput style={{ height: 20, fontSize: 16 }} placeholder="Phone Number"/>
                    </CardSection>   
                    <CardSection style={{ marginBottom: 10 }}>
                        <TextInput style={{ height: 20, fontSize: 16 }} placeholder="Notes and other Instructions"/>
                    </CardSection>   
                </View>
            )
        }
    }
    
    render() {
        return (
            <TouchableWithoutFeedback style={this.props.style} onPress={ () => {
                if(this.props.expanded) return this.props.selectLibrary(-1)
                return this.props.selectLibrary(this.props.id)
                } }>
                <View style={{ width: "100%" }}>    
                    <CardSection style={{ width:"100%", borderBottomWidth:0, height: 40 }}>
                        <View>
                            <Text style={{ width: "100%", fontWeight: "bold",color: this.props.expanded? "orange" : "purple", fontSize: 16 }}>
                                {this.props.children}
                            </Text>
                            <Text style={{ fontSize: 12 }}>
                                {this.props.address}
                            </Text>
                        </View>
                    </CardSection>
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        )
    }
})

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}