import { View, Text, TextInput, TouchableOpacity} from "react-native";

export default function Login(props){ //com default pode ser importado sem chaves
    return(
        <>
            <Text style={{
                fontSize:"60px",
                textAlign:"center",
                fontWeight:"bold",
                margin:"10%",
            }}>Login</Text>

            <Text style={{
                fontSize:"15px",
                marginLeft:"5%",
                marginBottom:"5px"
            }}> Email:</Text>
            <TextInput style={{
                color:"black",
                backgroundColor:"white",
                borderRadius:"5px",
                height:"25px",
                marginLeft:"5%",
                width:"90%"
            }} />
            <Text style={{
                fontSize:"15px",
                marginTop:"20px",
                marginLeft:"5%",
                marginBottom:"5px"
            }}> Senha:</Text>
            <TextInput style={{
                color:"black",
                backgroundColor:"white",
                borderRadius:"5px",
                height:"25px",
                marginLeft:"5%",
                marginBottom:"70%",
                width:"90%"
            }}
                secureTextEntry = {true}
                />

            <TouchableOpacity title="Usuarios" onPress={() => props.navigation.navigate("Usuarios")}>
                <View style={{
                    width:"200px",
                    height:"60px",
                    padding:"6%",
                    margin:"18%",
                    backgroundColor:"lightblue",
                    borderRadius:"15px",
                    marginBottom:"10px"
                }}>
                <Text style={{color:"black", textAlign:"center", fontWeight:"bold"}}>Login</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity title="Cadastro" onPress={() => props.navigation.navigate("Cadastro")}>
                <View style={{
                    width:"100px",
                    innerHeight:"40px",
                    backgroundColor:"white",
                    marginLeft:"34%"
                }}>
                <Text style={{color:"black", textAlign:"center"}}>Cadastrar</Text>
                </View>

            </TouchableOpacity>
        </>
    );
}