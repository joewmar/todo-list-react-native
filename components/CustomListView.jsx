import { View, Text, FlatList } from 'react-native'
import React from 'react'

const CustomListView = (props) => {

    return (
        <View className="w-full">
            <FlatList
                data={props.items}
                renderItem={({item}) => <Text className="text-lg h-44 p-10">{item[props.label]}</Text>}
            />
        </View>
    )
}

export default CustomListView