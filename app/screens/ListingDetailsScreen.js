// import { Card } from 'native-base';
import Card from '../components/Card';
import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import colors from "../config/colors";

function ListingDetailsScreen(props) {
    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image> */}
            <Card  title="my 1st item" subTitle="$100" image={require('../assets/jacket.jpg')}></Card>
            <Card  title="my 2nd item" subTitle="$800" image={require('../assets/couch.jpg')}></Card>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    container: {
        backgroundColor: colors.lightGrey,
        flex: 1,
        paddingTop: 60,
        padding: 20,
      },
    // card: {
    //     padding: 20,
    //     margin: 40
    // }
    
})

export default ListingDetailsScreen;