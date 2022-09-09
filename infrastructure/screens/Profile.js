import {View, Text,StyleSheet, SafeAreaView,ImageBackground,Image, ScrollView} from 'react-native';
import { Theme } from '../components/Theme';
import { faMessage, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export function Profile(){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.imgHolder}>
                    <ImageBackground style={styles.img}source={require('../../assets/images/map.jpg')}>
                            <View style={styles.infoP}>
                                <Image style={styles.img2} source={require('../../assets/images/doctor.jpg')} />
                                <Text style={styles.nameIdq}>Dr.Caren Kiribati</Text>
                                <Text style={styles.area}>Oncologist</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.iCons}>
                                    <FontAwesomeIcon style={styles.iCon} icon={faPhone} size={Theme.sizes[7]}/>
                                    <FontAwesomeIcon style={styles.iCon} icon={faMessage} size={Theme.sizes[8]}/>
                                    <FontAwesomeIcon style={styles.iCon} icon={faEnvelope} size={Theme.sizes[9]}/>
                                </View>

                    <View style={styles.reviews}>
                        <View style={styles.text}>
                            <Text>Patients</Text>
                            <Text>1000+</Text>
                        </View>
                        <View style={styles.text}>
                            <Text>Experiences</Text>
                            <Text>4 Years</Text>
                        </View>
                        <View style={styles.text}>
                            <Text>Reviews</Text>
                            <Text>5.0</Text>
                        </View>
                    </View>

                    
                        <Text style={styles.header}>Description</Text>

                        <View style={styles.infoS}>
                            <Text style={styles.des}>She was born in Nigeria where she grew up until</Text>
                            <Text style={styles.des}>the age of 13 after which she lived in</Text>
                            <Text style={styles.des}>Seattle,America.She obtained her Bachelors </Text>
                            <Text style={styles.des}>of Science in Life Sciences at Havard's</Text>
                            <Text style={styles.des}>University in ....</Text>
                        </View>

                        <Text style={styles.header}>Her Specialties</Text>

                        <View style={styles.specialty}>
                            <View style={styles.special}>
                                <Text style={styles.fam}>Oncology</Text>
                                <Text style={styles.fam}>Nuerology</Text>
                            </View>
                            <View style={styles.special}>
                                <Text style={styles.fam}>Surgery</Text>
                                <Text style={styles.fam}>Internal Medicine</Text>
                            </View>
                            <View style={styles.special}>
                                <Text style={styles.fam}>Urology</Text>
                                <Text style={styles.fam}>Radiology</Text>
                            </View>
                        </View>
                    
                </View>
                </ScrollView>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imgHolder:{

    },
    img:{
        height:250,
    },
    img2:{
        height:200,
        width:150,
        position:'absolute',
        top:130,
        left:18,
        borderRadius:10
    },
    infoP:{
        
    },
    nameIdq:{
        fontSize:Theme.fonts.fontSize.body,
        fontWeight:'bold',
        color:'black',
        position:'absolute',
        top:170,
        left:200,
    },
    area:{
        color:'black',
        fontSize:Theme.fonts.fontSize.title,
        fontWeight:'medium',
        marginTop:Theme.sizes[3],
        position:'absolute',
        top:200,
        left: 200,
    },
    iCon:{
        
    },
    iCons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    reviews:{
        paddingTop:100,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text:{
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    infoS:{
        paddingLeft:30
    },
    header:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:30,
        fontSize:30,
    },
    special:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fam:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth:2,
        borderRadius: 10,
        borderColor:'black',
        fontSize:19,
        backgroundcolor:Theme.colors.ui.nursePurple,
        paddingVertical:20,
        paddingHorizontal:20,
        marginTop:10,
    },
    des:{
        fontSize:17,
    }
    
})