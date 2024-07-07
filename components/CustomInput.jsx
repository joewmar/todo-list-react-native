import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'

const CustomInput = ({title, disabled, validation = {type: '', message: ''}, handleValue, value}) => {
  
  return (
    <View className="mb-6 p-3 w-full">
        <Text className={`block mb-2 text-sm font-medium text-neutral-700 ${disabled ? 'opacity-50' : ''}`}>{title}</Text>
        <TextInput defaultValue={value} onChangeText={handleValue} editable={!disabled} selectTextOnFocus={!disabled} underlineColorAndroid = "transparent" autoCapitalize = "none" className={`bg-neutral-50 border border-neutral-500 text-neutral-900 placeholder-neutral-700 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 ${disabled ? 'opacity-50' : ''} `} />
        <Text className={`mt-2 text-sm text-${validation.type == 'success' ? 'green' : 'red'}-600 ${disabled ? 'opacity-50' : ''}`}>{validation.message}</Text>
    </View>

  )
}

export default CustomInput