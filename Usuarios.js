import { Text, View, TouchableOpacity, Alert, Modal, StyleSheet, Pressable } from "react-native";
import { useContext, useState } from 'react';
import { UtilsContext } from './Context';

export default function Usuarios() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);
    const { utils, SetUtils } = useContext(UtilsContext)
    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalView: {
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        button: {
            borderRadius: 10,
            padding: 5,
            elevation: 2,
            display:"flex",
            top:"-105%",
            left:"78%"
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: 'gray',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
        close: {
            backgroundColor:"White",
            fontSize: 20,
            fontWeight:"bold",

        }
    });
    function remove() {
        if (selectedUserIndex !== null) {
            const updatedUsers = [...utils.users];
            updatedUsers.splice(selectedUserIndex, 1);
            SetUtils({ ...utils, users: updatedUsers });
            setModalVisible(false);
        }
    }

    function openModal(index) {
        setSelectedUserIndex(index);
        setModalVisible(true);
    }
    return (
        <>
            <Text style={{
                fontSize: "60px",
                textAlign: "center",
                fontWeight: "bold",
                margin: "10%",
            }}>
                Usuarios
            </Text>
            {utils.users.map((utils, index) => {
                return (
                    <>
                        <TouchableOpacity onPress={() => openModal(index)} style={{
                            borderWidth: 1,
                            borderColor: "black",
                            borderRadius: "10px",
                            margin: "10%",
                            width: "80%",
                            padding: "5%",
                        }}>
                            <Text>
                                Nome: {utils.nome}
                            </Text>

                            <Text>
                                Idade: {utils.idade}
                            </Text>

                            <Text>
                                Sexo: {utils.sexo}
                            </Text>

                            <Text>
                                Recebe Notificação: {utils.notifica == false ? "Não" : "Sim"}
                            </Text>

                        </TouchableOpacity>
                    </>
                )
            })}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {selectedUserIndex !== null && (
                            <>
                                <Text style={styles.modalText}>
                                    Nome: {utils.users[selectedUserIndex].nome}
                                </Text>
                                <Text style={styles.modalText}>
                                    Idade: {utils.users[selectedUserIndex].idade}
                                </Text>
                                <Text style={styles.modalText}>
                                    Sexo: {utils.users[selectedUserIndex].sexo}
                                </Text>
                                <Text style={styles.modalText}>
                                    Email: {utils.users[selectedUserIndex].email}
                                </Text>
                                <Text style={styles.modalText}>
                                    Senha: {utils.users[selectedUserIndex].senha}
                                </Text>
                                <Text style={styles.modalText}>
                                    Recebe Notificação: {utils.users[selectedUserIndex].notifica === false ? "Não" : "Sim"}
                                </Text>
                                <TouchableOpacity onPress={() => remove()} style={{ borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "red", bottom: 10 }}>
                                    <Text style={{ color: "white" }}> Deletar Usuario </Text>
                                </TouchableOpacity>
                            </>
                        )}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={styles.close}>X</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
}


