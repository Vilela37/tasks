import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"
import today_Image from "../../assets/imgs/today.jpg"
import Task from "../components/Task"
import moment from "moment"
import 'moment/locale/pt-br'

export default class TaskList extends Component{
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Task 
                        description="estudar pra prova de história"
                        estimate_at={new Date()}
                        done_at={new Date()}
                    />
                    <Task 
                        description="fazer a prova de história"
                        estimate_at={new Date()}
                        done_at={null}
                    />
                    <Task 
                        description="chorar após a prova de história"
                        estimate_at={new Date()}
                        done_at={null}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    background: {
        flex: 3 
    },
    
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }
})