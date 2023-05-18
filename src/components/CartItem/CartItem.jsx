import { Image, Text, View, Pressable } from 'react-native'
import { styles } from './CartItemStyle'
const CartItem = ({ item, onPress }) => {


    return (
        <Pressable style={styles.cartContainer} onPress={onPress}>
            <Image style={styles.image} source={{ uri: item.banner }} resizeMode="contain" />
            <View style={styles.descBody}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.summary}>{item.summary}</Text>
                <View style={styles.timeBody}>
                    <Text style={styles.timeTitle} >Reading time : </Text>
                    <Text style={styles.time}>{item.totalReadingTime} minute</Text>
                </View>
            </View>

        </Pressable>
    )
}

export default CartItem

