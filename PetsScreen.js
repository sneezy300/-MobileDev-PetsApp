import { styleSheets } from 'min-document';
import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';
import PetsShow1 from './components/PetsShow1'
import PetsShow2 from './components/PetsShow2'
import PetsShow3 from './components/PetsShow3'

export default function PetsScreen() {
    const pets = [
        { name: "Pastel", type: "Cat", age: "3years old", location: " Adenta housing", num: "1" },
    ]
    const pets1 = [
        { name: "Barky", type: "Dog", age: "4years old", location: " Kasoa", num: "2" },
    ]
    const pets2 = [
        { name: "Kitty", type: "Cat", age: "2years old", location: " East-Legon", num: "3" },
    ]
    return (
        <View>
            <View style={styles.searchBar}>
                <SearchBar
                    placeholder="Type Here..."



                />

            </View>
            <FlatList
                data={pets}
                renderItem={({ item }) => {
                    return <View>
                        <PetsShow1 name={item.name} type={item.type} age={item.age} location={item.location} />
                    </View>

                }}
                keyExtractor={(item) => item.number}
            />
            <View>
                <FlatList
                    data={pets1}
                    renderItem={({ item }) => {
                        return <View>
                            <PetsShow2 name={item.name} type={item.type} age={item.age} location={item.location} />
                        </View>

                    }}
                    keyExtractor={(item) => item.number}
                />

            </View>

            <View>
                <FlatList
                    data={pets2}
                    renderItem={({ item }) => {
                        return <View>
                            <PetsShow3 name={item.name} type={item.type} age={item.age} location={item.location} />
                        </View>

                    }}
                    keyExtractor={(item) => item.number}
                />

            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    searchBar: {
        marginBottom: 5,


    }


})



