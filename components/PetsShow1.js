import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function PetsShow1({ name, type, age, location }) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../assets/Cat1.jpg')} />
            </View>

            <View style={styles.bioContainer}>
                <View style={styles.profile}>
                    <Text style={styles.name}>{name}</Text>
                    <Text>{type}</Text>
                    <Text>{age}</Text>
                    <Text numberOfLines={1}><Ionicons name="ios-location" size={24} color="red" />{location}</Text>

                </View>


            </View>


        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: "center",

    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 15
    },

    name: {
        fontSize: 30,
        color: "#0d39d9",
        fontWeight: "bold",

    },


    bioContainer: {
        backgroundColor: "#f2f7f4",
        borderRadius: 20,
        flex: 1,
        justifyContent: "center",
        marginVertical: 20,


    },

    profile: {
        marginHorizontal: 30,



    },











})

