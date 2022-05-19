import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './src/context/UsersContext';


const Stack = createStackNavigator()

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          //declaro minha rota incial
          initialRouteName="UserList"
          screenOptions={screenOptions}

        >
          <Stack.Screen
            name="UserList"
            // vai direcionar tudo que chamar pelo name "Userlist" para minha view userList
            component={UserList}
            options={({ navigation }) => {
              //aqui quando carregar a tela ele entra no options que carrega a função de dar o title
              return {
                title: "Lista de Usuários",
                headerRight: () => (
                  <Button
                    //navigate é apenas para trocar de tela utilizando o onPress
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={30} color="white" />}
                  />
                )

              }
            }}
          />

          <Stack.Screen
            name="UserForm"
            // vai direcionar tudo que chamar pelo name "UserForm" para minha view userForm
            component={UserForm}
            options={{
              title: "Formulario de Usuários"
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>


  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },

  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}