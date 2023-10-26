import { Text, View} from "react-native";
import {useContext} from 'react';
import {UtilsContext} from './Context';

export default function Usuarios()
{
    
    const {utils, SetUtils} = useContext(UtilsContext)
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
            <Text> Nome: {utils.nome}</Text>
            <Text> Idade: {utils.idade}</Text>
            <Text> Sexo: {utils.sexo}</Text>
            <Text> Recebe Notificação: {utils.notifica == false ? "Não":"Sim"}</Text>
        </View>
        </>
    )
}