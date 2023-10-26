// import { StatusBar } from 'expo-status-bar';
// import { Button } from 'react-native-web';
import {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, SectionList, Switch} from 'react-native';
import Login  from './Login';
import Usuarios from './Usuarios';
import Cadastro from './Cadastro';
import {UtilsContext} from './Context';

export default function App() {
  // const [senha, setSenha] = useState("Teste")
  // const [inicio, setInicio] = useState(false)
  // const array = ["numero 1", "numero 2"]
  // const array2 = [{
  //   title:"Main Dishes",
  //   data: ['Pizza', 'Burguer']
  // }]
  const [utils, SetUtils] = useState({})
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{utils, SetUtils}}>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown: false, title: 'Login'}} component={Login}/>
          <Stack.Screen name="Cadastro" options={{ headerShown: false}} component={Cadastro}/>
          <Stack.Screen name="Usuarios" component={Usuarios}/>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
    
    // <>
    //   <Login/>
    //   <Cadastro/>
    // </>
    // <View style={styles.container}>
    //   <Switch
    //     onValueChange={() => setInicio(!inicio)}
    //     value={inicio}
    //     trackColor={{false: "#767577", true:"81B0FF"}}
    //     thumbColor={ "#F5DD4B" }
    //     activeThumbColor={"F4F5F4"}
    //     />
    //   <SectionList
    //     sections={array2}
    //     keyExtractor={(item, index) => item+index}
    //     renderItem={({item}) => (
    //       <Text style={{color:"green"}}>{item}</Text>
    //     )}
    //     renderSectionHeader = {({section: {title}}) => (
    //       <Text style = {{color: '#black'}} > {title} </Text>
    //     )}
    //     />
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <TextInput
    //     secureTextEntry = {true}
    //     placeholder = "Escreva sua senha"
    //     onChangeText={ e => setSenha(e)}
    //   />
    // <Text>{senha}</Text>
    // <TextInput
    //   multiline
    //   maxLength={40}
    //   numberOfLines={5}
    //   style={{backgroundColor: 'blue', color:'white'}}
    //   onChangeText={e => console.log('text area', e)}
    // />
    // <Button
    //   onPress={() => console.log("FUI pressionado")}
    //   title="ME CLIQUE!"
    //   color = {"#841684"}
    // ></Button>
    // <TouchableOpacity
    // style={{
    //   width:"200px",
    //   innerHeight:"40px",
    //   backgroundColor:"gray"
    // }}>
    // <Text>TouchableOpacity</Text>
    // </TouchableOpacity>
    // <TouchableWithoutFeedback
    // onPress={() => console.log("Whithout feedback")}>
    //   <View style={{
    //   width:"200px",
    //   innerHeight:"40px",
    //   backgroundColor:"black"
    //   }}>
    //   <Text style={{color:"pink"}}>TouchableWithoutFeedback</Text>
    //   </View>
    // </TouchableWithoutFeedback>
    // <Image
    // style={{
    //   height:"50px",
    //   width:"50px"
    // }}
    //   source={{
    //     uri:"https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
    //   }}
    //   />
    //   {array.map((item) =>{
    //     return(
    //       <Text>{item}</Text>
    //     )
    //   })}
    //   <FlatList
    //     data={array}
    //     renderItem={({item}) => <Text>{item}</Text>}
    //     keyExtrator={(item) => item}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: "10px"
  },
  textArea: {
    backgroundColor: 'black',
  }
});
