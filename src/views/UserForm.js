import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
// import { TextInput } from 'react-native-gesture-handler'

export default ({ route, navigation }) => {

    //descubro tudo que esta vindo para essa tela por meio das props
    // console.warn(Object.keys(props.route.params))

    //utilizando o useState vejo se  algo esta vindo e se estiver deixo o que esta vindo como o valor incial, como é um edit o primeiro valor é o incial
    //e se nao estiver vindo nada eu permito que ele cadastre um novo usuario
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        // <Text>{user.id}</Text>
        <View style={style.form}>
            <Text> Name </Text>
            <TextInput
                style={style.input}
                //crio um campod e input, onde permito que o usuario escreva um novo nome
                //apartir dai, chamo a função setUser, copio todos os parametros de user e subescrevo ele editando o name
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}

            />


            <Text> Email </Text>
            <TextInput
                style={style.input}
                //crio um campod e input, onde permito que o usuario escreva um novo nome
                //apartir dai, chamo a função setUser, copio todos os parametros de user e subescrevo ele editando o email
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o Nome"
                value={user.email}

            />


            <Text> url do Avatar </Text>
            <TextInput
                style={style.input}
                //crio um campod e input, onde permito que o usuario escreva um novo nome
                //apartir dai, chamo a função setUser, copio todos os parametros de user e subescrevo ele editando o urldoavatar
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe o Nome"
                value={user.avatarUrl}

            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}


            />

        </View>


    )
}

const style = StyleSheet.create(
    {
        form: {
            padding: 12
        },
        input: {

            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10
        }
    }
)