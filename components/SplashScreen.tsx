import React = require("react");
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/bg.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
    }
})

export default SplashScreen;