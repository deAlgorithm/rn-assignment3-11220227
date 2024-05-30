import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Greet = () => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.greetText}>Hello, Mendy</Text>
                <Text style={styles.taskNumber}>15 Tasks Today</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/usericon.jpeg')}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding : 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
    },
    textContainer: {
        alignItems: 'center',
    },
    greetText:{
        fontSize: 40,
        fontWeight : 'bold',
        color : 'white',
        fontFamily : 'monospace',
    },
    taskNumber:{
        marginLeft : -150,
        fontSize : 20,
    },
    imageContainer: {
        marginTop: 20,
    },
    image: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        
    }
});

export default Greet;