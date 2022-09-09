import { View,Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Theme } from "../components/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot, faNoteSticky, faWallet } from "@fortawesome/free-solid-svg-icons";

export function Service () {
    return(
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.serviceHeaders}>
                        <Image
                        source={require('../../assets/images/stet.jpeg')}
                        style={styles.serviceImg}
                        />
                        <View style={styles.headersInfo}>
                            <Text style={styles.title}>Diagnosis for need of Bone Calcium</Text>
                            <View style={styles.subHeaderInfo}>
                                <TouchableOpacity >
                                    <Text style={styles.subHeaderText}>Diagnosis</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.subHeaderText}>z Medicals</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.adressInfo}>
                                <FontAwesomeIcon icon={faLocationDot}
                                size={Theme.fonts.fontSize.body}
                                color={Theme.colors.brand.brandGreen}
                                style={{marginRight:4}}/>
                                <Text style={styles.adress}>78 Aminu Kano Crescent, Wuse 2, Abuja</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.serviceDesc}>
                        <View style={styles.descHeaders}>
                            <View style={styles.description}>
                            <FontAwesomeIcon icon={faNoteSticky}
                                size={Theme.fonts.fontSize.h5}
                                color={Theme.colors.brand.brandGreen}
                                style={{marginRight:4}}/>
                                <Text style={styles.priceInfo}>Description</Text>
                            </View>
                        </View>
                        <Text>Helooo</Text>
                    </View>
                    <View style={styles.serviceActions}>
                        <TouchableOpacity style={styles.bookingBlock}>
                            <Text>BOOK THIS SERVICE</Text>
                            <View style={styles.bookNow}>
                                <TextInput placeholder='search your location'></TextInput>
                                <Button>BOOK NOW</Button>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    areaView:{
        flex:1,
    },
    container:{
        flex:1,
        padding:Theme.sizes[3],
    },
    serviceHeaders:{
        flex:1,
        flexDirection:'row',
        height:60,
        padding:Theme.sizes[2],
        marginBottom:Theme.sizes[3],
        backgroundColor:Theme.colors.bg.secondary,
        borderWidth:1,
        borderColor:Theme.colors.bg.secondary,
        borderRadius:8,
    },
    serviceImg:{
        width:120,
        height:'100%',
        marginRight:Theme.sizes[2],
        borderRadius:8,
    },
    headersInfo:{
        flex:1,
    },
    title:{
        fontSize:Theme.fonts.fontSize.h4,
        color:Theme.colors.brand.brandDark,
        fontWeight:'bold',
    },
    subHeaderInfo:{
        flexBasis:'row',
        justifyContent:'space-between',
        marginVertical:Theme.sizes[2],
    },
    subHeadersText:{
        fontWeight:'bold',
        color:Theme.colors.ui.nurseGray,
    },
    adressInfo:{
        flexDirection:'row',
    },
    serviceDesc:{
        height:60,
        padding:Theme.sizes[2],
        marginBottom:Theme.sizes[3],
        backgroundColor:Theme.colors.bg.secondary,
        borderWidth:1,
        borderColor:Theme.colors.bg.secondary,
        borderRadius:8,
    },
    descHeaders:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:Theme.colors.ui.nurseDullGreen,
        paddingBottom:Theme.sizes[3],
        marginBottom:Theme.sizes[3],
    },
    description:{
        flexDirection:'row',
        alignItems:'center',
    },
    price:{
        flexDirection:'row',
    },
    descInfo:{
        fontWeight:'bold',
    },
    priceInfo:{
        fontWeight:'bold',
    },

});