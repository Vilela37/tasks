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

export default class Add_Tarefa extends Component{
    render(){
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
                    <TextInput
                        placeholder="Descrição da Tarefa"
                    />
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
    }

})