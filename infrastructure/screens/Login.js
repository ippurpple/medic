import {useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'; 
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCross} from '@fortawesome/free-solid-svg-icons';
import {Button,TextInput} from 'react-native-paper';
import { Theme } from '../components/Theme';



export function Login({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);
    const [accountType,setAccountType] = useState('individual');

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Questrial_400Regular });
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
    return(
    <SafeAreaView style={styles.areaView}>
       <View style={styles.container}>
          <View style={styles.logo}>
            <View style={styles.brandBlock}>
                     <FontAwesomeIcon icon={faCross}
                     size ={Theme.sizes[4]}
                     color={Theme.colors.brand.brandRed}/>
                     <Text style={styles.brandName}>medic</Text>
            </View>
          </View>
            <View style={styles.textArea}>
                <Text style={styles.headText}>Enter Details</Text>
            </View>

            <View style={styles.inputArea}>
                <TextInput label='email address'
                            mode='outlined'
                            OutlineColor={Theme.colors.bg.tertiary}
                            activeOutlineColor={Theme.colors.bg.quartenary}
                            keyboardType='email-address'
                            />
                <TextInput label='Enter password'
                            mode='outlined'
                            OutlineColor={Theme.colors.bg.tertiary}
                            activeOutlineColor={Theme.colors.bg.quartenary}
                            secureTextEntry={true}
                            />
                <Button 
                         mode='contained'
                         color={Theme.colors.ui.nursePurple}
                         style={{paddingVertical:Theme.sizes[3],paddingHorizontal:Theme.sizes[4],marginTop:Theme.sizes[5]}} 
                >
                Login
                </Button>
                
            </View>
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
   textArea:{
      alignItems:'center',
   },
   
   brandBlock:{
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:60,
   },
   brandName:{
    fontFamily:'Questrial_400Regular',
    fontSize:Theme.fonts.fontSizePoint.h4
   },
   headText:{
    fontSize:Theme.fonts.fontSizePoint.h3,
    marginVertical:Theme.sizes[4],
   },
});
