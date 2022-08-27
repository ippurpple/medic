import { useState, useEffect, useCallback } from 'react';
import { View,Text, TextInput, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../components/Theme';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function Home({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Questrial_400Regular});
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.leftContent}>
                        <Text style={styles.headerText}>Hello, Zoreh!</Text>
                        <Text style={styles.subHeadText}>Female, 23</Text>
                    </View>

                    <View style={styles.rightContent}>
                        <FontAwesomeIcon 
                        icon={faBell} 
                        size={30}
                        color={Theme.colors.ui.nurseGray}
                        />
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <TextInput style={styles.search} placeholder='search health service'/>
                    <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} size={20}/>
                </View>

                    <ImageBackground 
                    source={require('../../assets/images/nurse.jpg')}
                    resizeMode='cover'
                    style={styles.headerBg}
                    borderRadius={10}
                    > 
                        <View style={styles.bgLayer}>
                            <Text style={styles.brandMessage}>Skilled medical </Text>
                            <Text style={styles.brandMessage}>professionals </Text>
                            <Text style={styles.brandMessageSmall}>for all medial emergencies</Text>
                        </View>
                    </ImageBackground>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    areaView:{
        flex:1,
    },
    container:{
        flex:1,
        padding:Theme.sizes[3],
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    headerText:{
        fontSize:Theme.fonts.fontSize.h5,
        fontWeight:'bold',
        color:Theme.colors.ui.nursePurple
    },
    subHeadText:{
        color:Theme.colors.text.secondary
    },
    rightContent:{
        width:48,
        height:48,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    search:{
        borderWidth:1,
        borderRadius:50,
        borderColor:Theme.colors.bg.quartenary,
        padding:Theme.sizes[3],
        paddingLeft:46,
    },
    searchIcon:{
        position:'absolute',
        top:14,
        left:14,
    },
    searchContainer:{
    marginVertical:Theme.sizes[4]
    },
    headerBg:{
        height:200,
    },
    bgLayer:{
        flex:1,
        backgroundColor:'rgba(189,242,213,0.4)',
        padding:Theme.sizes[3],
        borderRadius:10,
    },
    brandMessage:{
        fontSize:Theme.fonts.fontSize.h3,
        fontWeight:'bold',
        color:10,
        shadowColor:'black',
        shadowOffset:{width:4,height:4},
        shadowRadius:4,
        shadowOpacity:0.8,
        
    },
    brandMessageSmall:{
        fontSize:Theme.fonts.fontSize.title,
        marginTop:Theme.sizes[3],
    }
})