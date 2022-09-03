import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/customHeader';
import { AppColors } from '../styles/AppColors';
import axios from 'axios';
import api from '../api/api';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStyles } from '../styles/AppStyles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, getCharacterListAction, removeFavorite } from '../redux/action';

const HomeScreen = () => {

    const [characterList, setCharacterList] = useState([]);
    const [isSearch, setIsSearch] = useState(false)
    const [name, setName] = useState('');
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const { getList, favorites } = useSelector(state => state.getList);

    useEffect(() => {
        getCharacterList()
    }, []);
    const getCharacterList = () => dispatch(getCharacterListAction());

    const handleAddFavorite = item => {
        dispatch(addFavorite(item))
    };

    const handleRemoveFavorite = item => {
        dispatch(removeFavorite(item))
    };

    const exists = (itemList) => {
        if (favorites.filter(item => item.char_id === itemList.char_id).length > 0) {
            return true;
        }
        return false;
    }

    const renderList = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'column', marginVertical: wp(10) }}>
                <Image source={{ uri: item.img }} style={{ width: wp(40), height: wp(60), borderRadius: wp(2) }} resizeMode={'cover'} />

                <View style={{ flexDirection: 'row', marginVertical: wp(4), justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: AppColors.primary_color }}>{item.name}</Text>
                        <Text style={{ color: AppColors.primary_color }}>{item?.nickname}</Text>
                    </View>
                    <MaterialIcons name={exists(item) ? 'favorite' : 'favorite-border'} size={25} color={AppColors.secondary_color} onPress={() => exists(item)
                        ? handleRemoveFavorite(item)
                        : handleAddFavorite(item)} />
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView edges={['top']} style={{ backgroundColor: 'black', flex: 1 }}>
            {isSearch ?
                <View style={{
                    flexDirection: 'row', width: '100%', backgroundColor: AppColors.light_black_color, height: '15%', alignItems: 'center', justifyContent: 'space-around'
                }}>
                    < MaterialIcons name='arrow-back' size={25} color={AppColors.primary_color} onPress={() => { }} />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={AppColors.primary_color}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={[AppStyles.textInput, { flex: 1, }]}

                    />
                    <MaterialIcons name='close' size={25} color={AppColors.primary_color} onPress={() => setIsSearch(false)} />
                </View> :
                <View style={{ flexDirection: 'row', width: '100%', backgroundColor: AppColors.light_black_color, height: '15%', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ color: AppColors.primary_color, fontSize: 23 }}>The Breaking Bread</Text>
                    <MaterialIcons name='search' size={25} color={AppColors.primary_color} onPress={() => setIsSearch(!isSearch)} />
                    <MaterialIcons name='favorite' size={25} color={AppColors.secondary_color} onPress={() => navigation.navigate('Favourite')} />
                </View>
            }
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
                data={getList}
                renderItem={(item, index) => renderList(item, index)}
            />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
