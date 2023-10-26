import { View, Text, TextInput, Image, Switch, TouchableOpacity} from "react-native";
import {useState, useContext} from 'react';
import {UtilsContext} from './Context';

export default function Cadastro(props){
    const [inicio, setInicio] = useState(false)
    const {utils, SetUtils} = useContext(UtilsContext)
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmar, setConfirmarSenha] = useState("")
    const [email, setEmail] = useState("")
    console.log("utils", utils)

    function goToUsuarios(){
        SetUtils({...utils, email:email, nome:nome, idade:idade, sexo:sexo, senha:senha, confirmarSenha:confirmar, notifica: inicio})
        props.navigation.navigate('Usuarios')
    }
    return(
        <>
            <Image style={{
                height:"200px",
                width:"200px",
                marginLeft:"17%",
                marginBottom:"20px"
            }}
            source={{
                uri:"https://cdn-icons-png.flaticon.com/512/17/17004.png"
            }}
             />
            <Text style={{
                marginLeft:"5%",
                marginBottom:"10px"
            }} > Nome:</Text>
            <TextInput onChangeText={text => setNome(text)}
                value={nome}
                style={{
                    color:"black",
                    backgroundColor:"white",
                    borderRadius:"5px",
                    height:"25px",
                    marginLeft:"5%",
                    marginBottom:"12px",
                    width:"90%"
            }} />       
            <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }} > 
                <View>
                    <Text style={{
                        marginLeft:"10%",
                        marginBottom:"10px",
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }} > Idade:</Text>
                    <TextInput onChangeText={text => setIdade(text)}
                    value={idade}
                    style={{
                        color:"black",
                        backgroundColor:"white",
                        borderRadius:"5px",
                        height:"25px",
                        marginLeft:"10%",
                        marginBottom:"12px",
                        width:"90%",
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}/>
                </View>
                <View>
                    <Text style={{
                        marginLeft:"10%",
                        marginBottom:"10px",
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }} > Sexo:</Text>
                    <TextInput onChangeText={text => setSexo(text)}
                    value={sexo}
                    style={{
                        color:"black",
                        backgroundColor:"white",
                        borderRadius:"5px",
                        height:"25px",
                        marginLeft:"10%",
                        marginBottom:"12px",
                        width:"80%",
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}/>
                </View>
            </View> 
            <Text style={{
                marginLeft:"5%",
                marginBottom:"10px"
            }} > Email:</Text>
            <TextInput onChangeText={text => setEmail(text)}
                value={email}
                 style={{
                color:"black",
                backgroundColor:"white",
                borderRadius:"5px",
                height:"25px",
                marginLeft:"5%",
                marginBottom:"12px",
                width:"90%"
            }}/>
            <Text style={{
                marginLeft:"5%",
                marginBottom:"10px"
            }} > Senha:</Text>
            <TextInput onChangeText={text => setSenha(text)}
                value={senha}
                style={{
                color:"black",
                backgroundColor:"white",
                borderRadius:"5px",
                height:"25px",
                marginLeft:"5%",
                marginBottom:"12px",
                width:"90%"
            }}
            secureTextEntry = {true}
            />
            <Text style={{
                marginLeft:"5%",
                marginBottom:"10px"
            }} > Confirma Senha:</Text>
            <TextInput onChangeText={text => setConfirmarSenha(text)}
                value={confirmar}
                style={{
                color:"black",
                backgroundColor:"white",
                borderRadius:"5px",
                height:"25px",
                marginLeft:"5%",
                marginBottom:"12px",
                width:"90%"
            }}
            secureTextEntry = {true}
            />
            <Text style={{
                marginLeft:"5%",
                marginBottom:"10px"
            }} > Deseja Receber Notificações? </Text>
            <Switch style={{
                marginLeft:"7%",
                height:"20px"
            }}
                onValueChange={() => setInicio(!inicio)}
                value={inicio}
                trackColor={{false: "#5D5D5D", true:"#000"}}
                thumbColor={ "#000" }
                activeThumbColor={"#000"}
            />
            <TouchableOpacity title="Cadastrar" onPress={() => goToUsuarios()}>
                <View style={{
                    width:"200px",
                    height:"60px",
                    padding:"6%",
                    margin:"18%",
                    backgroundColor:"lightblue",
                    borderRadius:"15px",
                    marginBottom:"10px"
                }}>
                <Text style={{color:"black", textAlign:"center", fontWeight:"bold"}}>Cadastrar</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity title="Voltar" onPress={() => props.navigation.navigate("Login")}>
                <View style={{
                    width:"100px",
                    innerHeight:"40px",
                    backgroundColor:"white",
                    marginLeft:"34%"
                }}>
                <Text style={{color:"black", textAlign:"center"}}>Cancelar</Text>
                </View>

            </TouchableOpacity>
        </>
    );
}