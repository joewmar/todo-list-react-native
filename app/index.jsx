import { Text, SafeAreaView, ScrollView, View, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'

const Main = () => {
  return (
    <SafeAreaView className="h-full flex flex-col justify-center space-y-5 items-center">
          <Text className="text-3xl text-white">Welcome to Todo List</Text>
          <Image className="text-center w-60 h-60" source={require('../assets/images/react-logo.png')} />
          <CustomButton containerStyle="w-screen" title="Continue" handlePress={() => router.push('/home')} /> 
          {/* route.push('') is like href */}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Main