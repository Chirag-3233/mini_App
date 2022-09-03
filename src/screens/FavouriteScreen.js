import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../components/customHeader';
import { AppColors } from '../styles/AppColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { addFavorite, removeFavorite } from '../redux/action';

const FavouriteScreen = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.getList);

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
        <SafeAreaView
            edges={['top']}
            style={{ backgroundColor: 'black', flex: 1 }}
        >
            <CustomHeader
                title={'Favourites'}
            />
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
                data={favorites}
                renderItem={(item, index) => renderList(item, index)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default FavouriteScreen;
