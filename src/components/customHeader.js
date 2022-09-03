import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppColors } from '../styles/AppColors';
import { FontFamily } from '../styles/FontFamily';

const CustomHeader = ({ title, color, isSearch }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#242424', height: '12%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ color: AppColors.secondary_color, fontSize: 23, fontFamily: 'bold' }}>{title}</Text>
            <MaterialIcons name='close' size={25} color={AppColors.primary_color} onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CustomHeader;
