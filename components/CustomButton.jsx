import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ( { title, handlePress, containerStyle, textStyle, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress} 
      activeOpacity={0.7}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${containerStyle}
      ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`text-white text-center font-bold ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton