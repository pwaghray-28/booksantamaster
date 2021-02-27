import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class ReceiverDetails extends Component{
    render(){return(
        <View>
        <Text>
        Receiver Details
        </Text>
        </View>
    )}
}