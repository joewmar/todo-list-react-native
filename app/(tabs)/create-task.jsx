import { View, Text } from 'react-native'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'
import React, {useState} from 'react'

const CreateTask = () => {
  const [task, setTask] = useState('');
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>Create Task</Text>
      <CustomInput title="Title of Task" handleValue={(newTask) => setTask(newTask)} value={task} />
      <CustomButton containerStyle="w-96" title="Add Task" handlePress={() => router.push('/home')} /> 
      </View>
  )
}

export default CreateTask