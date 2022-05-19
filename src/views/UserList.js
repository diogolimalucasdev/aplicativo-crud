import * as React from 'react';
import {View,FlatList,Alert} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Avatar, Button,  Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext';

export default props => {
    // console.warn('error') //ajuda com que o error apareça na tela do celular para ajudar no debug
    
     const {state } = React.useContext(UsersContext)
    //  console.warn(Object.keys(ctx.state))

    //função bem simples de deletar o usuario 
    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuario?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete' + user.id )
                }
            },

            {
                text: 'Não'
            }

        ])
    }


    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange' />}
                />

                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red' />}
                />
            </>
        )
    }




    function getUserItem({ item: user }) {  // quando eu faõ item: user é que eu falo ao meu codigo que vou utlizar user dentro dentro da função

        //Poderia usar assim  
        // return <Text>{user.name} - {user.email} </Text> //to acessando o nome de cada usuario dentro do data

        //ou assim


        //tive que pesquisar sobre, pois a nova versao esta diferente do video
        return (
            <ListItem>
                <Avatar source={{ uri: user.avatarUrl }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <View>
                    {getActions(user)}
                </View>
            </ListItem>

        )
    }



    return (
        <View>

            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem} //Passo apenas a referencia, que é minha função.Ele vai acessar minha função, onde na minha função eu estou buscando os usuarios
            />




        </View>

    )
}