import React, {Component} from "react"
import {StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native"
import { Icon } from "react-native-vector-icons/FontAwesome6"
import moment from "moment"
import 'moment/locale/pt-br'

export default props =>{
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => alert("Olá")}>
                <View style={styles.checkContainer}>
                    <View style={styles.pending}>
                       {/*<Icon name="check" size={20}></Icon>*/}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.date}>{props.estimate_at + " "}</Text>
                <Text style={styles.date}>{props.done_at + " "}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    desc: {
        fontFamily: 'Arial',
        fontSize: 20
    },
    date: {
        fontFamily: 'Arial'
    },
    checkContainer:{
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    done:{
        height: 25,
        width: 25,
        boderRadius: 13,
        boderWidth: 1,
        backgroundColor: "#4D7031",
        alingItems: "center",
        justifyContent: "center"
    },
    pending:{
        height: 25,
        width: 25,
        boderRadius: 13,
        boderWidth: 1,
        borderColor: "#555555" 
    }
})