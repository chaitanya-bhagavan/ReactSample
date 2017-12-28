import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import * as nb from 'native-base';

export default class Icon extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 1, paddingLeft: '2%' }} >
                    <TouchableOpacity>
                        <nb.Icon style={{ color: '#1a273f' }} name="md-arrow-dropleft" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, paddingRight: '2%', alignItems: 'flex-end' }} >
                    <TouchableOpacity>
                        <nb.Icon style={{ color: '#1a273f' }} name="md-arrow-dropright" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 