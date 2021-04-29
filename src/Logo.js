import React, {useState} from 'react';
import { StyleSheet, Image, View } from 'react-native';


export const Logo = props => {

    const [showTexterra, setShowTexterra] = useState(props.showTexterra);

    return(
        <View style={ styles.logoContainer }>
            <View style={styles.logo}>
                <Image
                    source={require('../assets/img/teachline-logo.png')}
                    fadeDuration={0}
                    style={{ width: 134, height: 28 }}
                />
            </View>
            {showTexterra &&
            <View style={styles.logo} >
                <Image 
                    source={require('../assets/img/texterra-logo.png')}
                    fadeDuration={0}
                    style={{ width: 130, height: 25 }}
                />
            </View> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 51,
        paddingBottom: 75,
    },
    logo: {
        paddingHorizontal: 10,
    }
});