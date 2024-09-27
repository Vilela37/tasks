import { Component } from "react";
import {
    Text,
    TextInput, // input de form
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal // tela sobreposta,"tipo" alert/camada
} from "react-native"

import Icon from "react-native-vector-icons";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

export default class Add_Tarefa extends Component{
    render(){
        const data_formatada = moment(new Date()).format('ddd, D [de] MMMM [de] YYYY')
        return(
            <Modal
                transparent={true}
                visible={true}
                //onRequestClose={#}
                animationType="slide"
            >
                <TouchableWithoutFeedback> 
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                    <Text style={styles.cabecalho}>Nova Tarefa</Text>
                    <View>
                        <Icon name="clipboard-check" size={25}></Icon>
                        <TextInput
                            placeholder="Descrição da Tarefa"
                        />
                    </View>
                    <TouchableOpacity>
                        <Icon name="calendar" size={25}></Icon>
                        <Text>{data_formatada}</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <Text>CANCELAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback> 
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
            </Modal>
        ) // touchable = fundinho transparente; fecha ao clicar
    }
}

const styles = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)' //opacidade
    },
    principal:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    cabecalho:{
        backgroundColor: "#B13B44",
        color: '#FFF',
        textAlign: 'center',
        padding: 20,
        fontSize: 25
    },
    input:{
        width: '85%',
        margin: 15,
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    botao: {
        margin: 20,
        marginRight: 30,
        color: '#B13B44'
    },
    container: {
        flexDirection: 'row',
        alignItens: 'center',
        marginLeft: 15,
        paddingVertical: 10
    },
    data: {
        margin: 10,
    }
})