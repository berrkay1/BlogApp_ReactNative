import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    SafeAreaView,
    Text,
    View
} from 'react-native'
import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'
import CartItem from '../../components/CartItem/CartItem'
import { styles } from '../CartList/CartListStyle'
import LoadingAlert from '../../components/Alerts/LoadingAlert'
import ErrorAlert from '../../components/Alerts/ErrorAlert'
const CartListPage = ({ navigation }) => {
    const {
        data,
        loading,
        error,
        loadMoreItem,
        currentPage,
        refreshing,
        onRefresh,
    } = useContext(GlobalContext); // To get state and necessary functions from Context Api

    if (loading) {
        return <LoadingAlert />
    }

    if (error) {
        return <ErrorAlert />
    }

    const renderLoader = () => { // infinite scroll
        return (
            currentPage <= 3 ? <View style={styles.loaderStyle}>
                <ActivityIndicator size='large' color='#aaa' />
            </View> : <View>
                <Text style={styles.end}>The End</Text>
            </View>
        )
    }

    const renderItem = ({ item }) => <CartItem item={item} onPress={() => goToDetail(item)} /> //renderItem rendered outside for performance boost


    const goToDetail = (item) => { // go to Detail page
        navigation.navigate('CartDetailPage', { item })
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, idx) => idx}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0.2}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }

            />
        </SafeAreaView>
    )
}

export default CartListPage

