import { Text, View} from "react-native";

export default function Usuarios()
{
    return(
        <>        
        <Text style={{
            fontSize:"60px",
            textAlign:"center",
            fontWeight:"bold",
            margin:"10%",
        }}>Usuarios</Text>
        <View style={{
           borderWidth: 1,
           borderColor: "black",
           borderRadius:"10px",
           margin:"10%",
           width:"80%",
           padding:"5%"
        }}>
            <Text> Nome: </Text>
            <Text> Idade: </Text>
            <Text> Sexo: </Text>
            <Text> Recebe Notificação: </Text>
        </View>
        </>
    )
}