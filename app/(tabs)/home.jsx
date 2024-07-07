import { View, Text } from 'react-native'
import React from 'react'
import CustomListView from '@/components/CustomListView'
import InsertRecord from '../db/insert'

const Home = () => {
  let data = [
    {id: 1, title: 'todo1'},
    {id: 2, title: 'todo2'},
    {id: 3, title: 'todo3'},
  ];
  // const insert = InsertRecord('todos', ['title'],[ 'todo1'])
  return (
    <View className="flex-1 justify-center items-center bg-white w-full">
      <CustomListView items={data} label="title" keys="id" />
    </View>
  )
}

export default Home