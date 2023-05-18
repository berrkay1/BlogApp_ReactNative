import { Image, View, useWindowDimensions } from 'react-native'
import { styles } from './CartDetailStyle'
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native';



const CartDetailPage = ({ route }) => {
  const detail = route.params.item;

  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.detailContainer}>
      <Image style={styles.image} source={{ uri: detail.banner }} resizeMode="contain" />
      <View style={styles.descBody}>
        <RenderHtml
          contentWidth={width}
          source={{ html: detail?.content }}
        />
      </View>
    </ScrollView>
  )
}

export default CartDetailPage

